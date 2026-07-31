// =======================================
// THÔNG TIN AI - script.js
// =======================================

const knowledgeContainer = document.getElementById("knowledgeContainer");
const knowledgeSection = document.getElementById("knowledge-section");
const knowledgeToggle = document.getElementById("knowledgeToggle");
const guideContainer = document.getElementById("guideContainer");
const guideSection = document.getElementById("guide-section");
const guideToggle = document.getElementById("guideToggle");
const toolContainer = document.getElementById("toolContainer");
const toolSection = document.getElementById("tool-section");
const professionContainer = document.getElementById("professionContainer");
const professionSection = document.getElementById("profession-section");
const rankingContainer = document.getElementById("rankingContainer");
const rankingSection = document.getElementById("ranking-section");
const homeToggle = document.getElementById("homeToggle");
const toolsToggle = document.getElementById("toolsToggle");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearSearchBtn = document.getElementById("clearSearch");
const sidebarItems = document.querySelectorAll(".sidebar li[data-category]");
const utilityItems = document.querySelectorAll("[data-utility]");
const darkModeBtn = document.getElementById("darkMode");
const compactModeBtn = document.getElementById("compactMode");
const langSelect = document.getElementById("langSelect");
const heroRobot = document.querySelector(".hero-robot");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navEl = document.querySelector(".header nav");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarPanel = document.getElementById("sidebarPanel");
const backToTopBtn = document.getElementById("backToTop");
const sortTools = document.getElementById("sortTools");

let currentCategory = "all";
let specialFilter = null; // null | "newest" | "free" | "favorites" | "recent" | "random"
let randomPickIds = [];
let favorites = new Set(JSON.parse(localStorage.getItem("favoriteTools") || "[]"));
let recentlyViewed = JSON.parse(localStorage.getItem("recentTools") || "[]");

function saveFavorites() {
  localStorage.setItem("favoriteTools", JSON.stringify([...favorites]));
}

function addToRecent(toolId) {
  recentlyViewed = [toolId, ...recentlyViewed.filter(id => id !== toolId)].slice(0, 10);
  localStorage.setItem("recentTools", JSON.stringify(recentlyViewed));
}

// ---------- NGÔN NGỮ ----------
const supportedLanguages = ["vi", "en"];
let currentLang = supportedLanguages.includes(localStorage.getItem("lang")) ? localStorage.getItem("lang") : "vi";

function localizedText(value) {
  if (value && typeof value === "object") {
    return value[currentLang] || value.vi || value.en || "";
  }
  return value || "";
}

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.vi[key] || key;
}

// Lấy favicon trực tiếp từ tên miền chính thức của từng công cụ, tránh dùng sai logo
// khi kho icon bên thứ ba chưa có hoặc đặt tên icon khác với thương hiệu.
function officialLogoUrl(link) {
  try {
    return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(new URL(link).hostname)}`;
  } catch {
    return "";
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("site_title");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  clearSearchBtn.setAttribute("aria-label", t("clear_search"));
  clearSearchBtn.title = t("clear_search");
  if (heroRobot) {
    heroRobot.alt = t("robot_alt");
  }
  applyCompactMode(document.body.classList.contains("compact"));
}

langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  localStorage.setItem("lang", currentLang);
  applyTranslations();
  renderKnowledge();
  renderGuide();
  renderTools();
  renderProfession();
  renderRanking();
});

// ---------- RENDER KIẾN THỨC AI ----------
function renderKnowledge() {
  knowledgeContainer.innerHTML = aiKnowledge.map(item => `
    <div class="knowledge-card">
      <div class="knowledge-icon">${item.icon}</div>
      <h3>${localizedText(item.name)}</h3>
      ${
        Array.isArray(item.content)
          ? "<ul>" + item.content.map(x => `<li>${localizedText(x)}</li>`).join("") + "</ul>"
          : `<p>${localizedText(item.content)}</p>`
      }
    </div>
  `).join("");
}

// ---------- RENDER HƯỚNG DẪN SỬ DỤNG AI ----------
function renderGuide() {
  guideContainer.innerHTML = aiGuide.map(item => `
    <div class="knowledge-card">
      <div class="knowledge-icon">${item.icon}</div>
      <h3>${localizedText(item.name)}</h3>
      <p>${localizedText(item.content)}</p>
    </div>
  `).join("");
}

// ---------- RENDER AI THEO NGHỀ ----------
function renderProfession() {
  professionContainer.innerHTML = aiByProfession.map(item => `
    <div class="profession-card">
      <div class="knowledge-icon">${item.icon}</div>
      <h3>${localizedText(item.title)}</h3>
      <p class="profession-intro">${localizedText(item.intro)}</p>
      <ul class="profession-tasks">
        ${item.tasks.map(task => `<li>${localizedText(task)}</li>`).join("")}
      </ul>
      <div class="profession-suggest">
        <span class="suggest-label">${t("profession_suggest_label")}</span>
        <div class="chip-row">
          ${item.suggested.map(name => `<span class="chip" data-tool="${name}">${name}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Bấm vào tên công cụ gợi ý -> tìm công cụ đó trong khu Công cụ AI
  professionContainer.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      searchInput.value = chip.dataset.tool;
      specialFilter = null;
      currentCategory = "all";
      clearSidebarActive();
      document.querySelector('.sidebar li[data-category="all"]').classList.add("active");
      renderTools();
      showSection("tools");
    });
  });
}

// ---------- RENDER BẢNG XẾP HẠNG AI ----------
function renderRanking() {
  const ranked = [...aiTools].sort((a, b) => b.rating - a.rating).slice(0, 20);

  rankingContainer.innerHTML = ranked.map((tool, idx) => {
    const pos = idx + 1;
    const posLabel = pos === 1 ? "🥇" : pos === 2 ? "🥈" : pos === 3 ? "🥉" : pos;
    return `
      <div class="ranking-item">
        <div class="rank-pos ${pos <= 3 ? "rank-top" : ""}">${posLabel}</div>
        <div class="ranking-logo">
          <img class="tool-logo" data-fallback-icon="${tool.icon}"
               src="${officialLogoUrl(tool.link)}"
               alt="Logo ${tool.name}">
        </div>
        <div class="ranking-info">
          <h4>${tool.name}</h4>
          <span class="ranking-category">${t("cat_" + tool.category)}</span>
        </div>
        <div class="ranking-rating">⭐ ${tool.rating.toFixed(1)}</div>
        <a class="btn btn-free ranking-link" href="${tool.link}" target="_blank" rel="noopener">${t("btn_use")}</a>
      </div>
    `;
  }).join("");

  rankingContainer.querySelectorAll(".ranking-logo .tool-logo").forEach(img => {
    img.addEventListener("error", () => {
      const span = document.createElement("span");
      span.style.fontSize = "28px";
      span.textContent = img.dataset.fallbackIcon;
      img.replaceWith(span);
    }, { once: true });
  });
}

// ---------- CHUYỂN QUA LẠI GIỮA CÁC KHU VỰC (chỉ hiện 1 khu vực tại 1 thời điểm) ----------
function showSection(target) {
  const sections = {
    tools: toolSection,
    knowledge: knowledgeSection,
    guide: guideSection,
    profession: professionSection,
    ranking: rankingSection
  };

  // Ẩn tất cả khu vực, chỉ hiện đúng khu vực được chọn
  Object.entries(sections).forEach(([key, el]) => el.classList.toggle("hidden", key !== target));

  // Đánh dấu link đang active trên menu
  [homeToggle, knowledgeToggle, toolsToggle, guideToggle].forEach(link => link.classList.remove("active-link"));
  if (target === "knowledge") knowledgeToggle.classList.add("active-link");
  if (target === "guide") guideToggle.classList.add("active-link");
  if (target === "tools") { homeToggle.classList.add("active-link"); toolsToggle.classList.add("active-link"); }

  // Cuộn lên đúng đầu khu vực vừa hiện
  sections[target].scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- MENU DI ĐỘNG: MỞ/ĐÓNG NAV & SIDEBAR ----------
function closeMobileMenus() {
  navEl.classList.remove("nav-open");
  sidebarPanel.classList.remove("sidebar-open");
}

mobileMenuBtn.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  sidebarPanel.classList.remove("sidebar-open");
});

sidebarToggle.addEventListener("click", () => {
  sidebarPanel.classList.toggle("sidebar-open");
  navEl.classList.remove("nav-open");
});

// ---------- SIDEBAR: BỎ TRẠNG THÁI ACTIVE Ở TẤT CẢ MỤC ----------
function clearSidebarActive() {
  sidebarItems.forEach(item => item.classList.remove("active"));
  utilityItems.forEach(item => item.classList.remove("active"));
}

// ---------- TRỞ VỀ TRẠNG THÁI MẶC ĐỊNH CỦA KHU CÔNG CỤ AI ----------
function resetToolsView() {
  specialFilter = null;
  currentCategory = "all";
  searchInput.value = "";
  clearSidebarActive();
  document.querySelector('.sidebar li[data-category="all"]').classList.add("active");
  renderTools();
}

homeToggle.addEventListener("click", (e) => { e.preventDefault(); resetToolsView(); showSection("tools"); closeMobileMenus(); });
toolsToggle.addEventListener("click", (e) => { e.preventDefault(); resetToolsView(); showSection("tools"); closeMobileMenus(); });
knowledgeToggle.addEventListener("click", (e) => { e.preventDefault(); showSection("knowledge"); closeMobileMenus(); });
guideToggle.addEventListener("click", (e) => { e.preventDefault(); showSection("guide"); closeMobileMenus(); });

// ---------- TIỆN ÍCH: SO SÁNH / XẾP HẠNG / MỚI NHẤT / MIỄN PHÍ / THEO NGHỀ ----------
utilityItems.forEach(li => {
  li.addEventListener("click", () => {
    clearSidebarActive();
    li.classList.add("active");
    const type = li.dataset.utility;
    if (type !== "random") searchInput.value = "";

    if (type === "ranking") {
      renderRanking();
      showSection("ranking");
    } else if (type === "profession") {
      renderProfession();
      showSection("profession");
    } else if (type === "newest") {
      specialFilter = "newest";
      currentCategory = "all";
      renderTools();
      showSection("tools");
    } else if (type === "free") {
      specialFilter = "free";
      currentCategory = "all";
      renderTools();
      showSection("tools");
    } else if (type === "favorites") {
      specialFilter = "favorites";
      currentCategory = "all";
      renderTools();
      showSection("tools");
    } else if (type === "recent") {
      specialFilter = "recent";
      currentCategory = "all";
      renderTools();
      showSection("tools");
    } else if (type === "random") {
      const shuffled = [...aiTools].sort(() => Math.random() - 0.5);
      randomPickIds = shuffled.slice(0, 8).map(tool => tool.id);
      searchInput.value = "";
      specialFilter = "random";
      currentCategory = "all";
      renderTools();
      showSection("tools");
    }

    sidebarPanel.classList.remove("sidebar-open");
  });
});

// ---------- RENDER CÔNG CỤ AI ----------
function renderTools() {
  const badgeLabel = {
    free: t("badge_free"),
    pro: t("badge_pro"),
    hot: t("badge_hot")
  };

  const keyword = searchInput.value.trim().toLowerCase();

  let filtered = aiTools.filter(tool => {
    const matchCategory = specialFilter ? true : (currentCategory === "all" || tool.category === currentCategory);
    const matchSearch = tool.name.toLowerCase().includes(keyword) ||
                         localizedText(tool.description).toLowerCase().includes(keyword);
    const matchSpecial = specialFilter === "free" ? tool.badge === "free" :
                         specialFilter === "favorites" ? favorites.has(tool.id) :
                         specialFilter === "recent" ? recentlyViewed.includes(tool.id) :
                         specialFilter === "random" ? randomPickIds.includes(tool.id) : true;
    return matchCategory && matchSearch && matchSpecial;
  });

  // "AI mới nhất": sắp xếp theo id giảm dần, lấy 12 công cụ gần nhất
  if (specialFilter === "newest") {
    filtered = [...filtered].sort((a, b) => b.id - a.id).slice(0, 12);
  }

  if (specialFilter === "recent" && sortTools.value === "featured") {
    filtered.sort((a, b) => recentlyViewed.indexOf(a.id) - recentlyViewed.indexOf(b.id));
  }

  if (sortTools.value === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortTools.value === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, currentLang));
  } else if (sortTools.value === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name, currentLang));
  }

  const countLabel = document.getElementById("toolCount");
  if (countLabel) countLabel.textContent = t("tool_count").replace("{n}", filtered.length);

  if (filtered.length === 0) {
    toolContainer.innerHTML = `<div class="empty">${specialFilter === "favorites" ? t("favorites_empty") : specialFilter === "recent" ? t("recent_empty") : t("empty_search")}</div>`;
    return;
  }

  toolContainer.innerHTML = filtered.map(tool => `
    <div class="tool-card">
      <span class="badge ${tool.badge}">${badgeLabel[tool.badge] || ""}</span>
      <button class="favorite-btn ${favorites.has(tool.id) ? "is-favorite" : ""}" type="button" data-tool-id="${tool.id}" aria-label="${favorites.has(tool.id) ? t("favorite_remove") : t("favorite_add")}" title="${favorites.has(tool.id) ? t("favorite_remove") : t("favorite_add")}">${favorites.has(tool.id) ? "♥" : "♡"}</button>
      <div class="tool-image">
        <img class="tool-logo" data-fallback-icon="${tool.icon}"
             src="${officialLogoUrl(tool.link)}"
             alt="Logo ${tool.name}">
      </div>
      <div class="tool-content">
        <h3>${tool.name}</h3>
        <div class="rating">⭐ <span>${tool.rating.toFixed(1)}/5</span></div>
        <p>${localizedText(tool.description)}</p>
        <div class="tool-buttons"><a class="btn btn-free tool-use-link" data-tool-id="${tool.id}" href="${tool.link}" target="_blank" rel="noopener">${t("btn_use")}</a></div>
      </div>
    </div>
  `).join("");

  // Nếu logo thật không tải được (không có trong kho) -> hiện icon emoji thay thế
  toolContainer.querySelectorAll(".tool-logo").forEach(img => {
    img.addEventListener("error", () => {
      const span = document.createElement("span");
      span.style.fontSize = "48px";
      span.textContent = img.dataset.fallbackIcon;
      img.replaceWith(span);
    }, { once: true });
  });

  toolContainer.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.toolId);
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      saveFavorites();
      renderTools();
    });
  });

  toolContainer.querySelectorAll(".tool-use-link").forEach(link => {
    link.addEventListener("click", () => addToRecent(Number(link.dataset.toolId)));
  });

  // Add click event to tool cards to show detail panel
  toolContainer.querySelectorAll(".tool-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".favorite-btn") || e.target.closest(".tool-use-link")) return;
      
      const toolName = card.querySelector("h3").textContent;
      const tool = filtered.find(t => t.name === toolName);
      
      if (tool) {
        // Remove active class from all cards
        toolContainer.querySelectorAll(".tool-card").forEach(c => c.classList.remove("active"));
        // Add active class to clicked card
        card.classList.add("active");
        // Show detail panel
        renderToolDetail(tool);
      }
    });
  });
}

// ---------- RENDER TOOL DETAIL PANEL ----------
function renderToolDetail(tool) {
  const detailPanel = document.getElementById("toolDetailPanel");
  const isFavorite = favorites.has(tool.id);
  const badgeClass = tool.badge || "free";
  const badgeLabel = {
    free: t("badge_free"),
    pro: t("badge_pro"),
    hot: t("badge_hot")
  }[badgeClass] || "";

  const categoryLabel = {
    chat: t("cat_chat"),
    image: t("cat_image"),
    video: t("cat_video"),
    code: t("cat_code"),
    finance: t("cat_finance"),
    study: t("cat_study")
  }[tool.category] || tool.category;

  const description = localizedText(tool.description);
  const features = tool.features ? (Array.isArray(tool.features) ? tool.features : [tool.features]) : [];
  const featuresHtml = features.length > 0 ? 
    `<div class="detail-section">
      <h3>✨ ${t("detail_features") || "Tính năng"}</h3>
      <ul>
        ${features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>` : "";

  const tagsHtml = tool.tags && tool.tags.length > 0 ?
    `<div class="detail-section">
      <h3>🏷️ ${t("detail_tags") || "Tags"}</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
        ${tool.tags.map(tag => `<span style="background: #f0f4f8; padding: 6px 12px; border-radius: 20px; font-size: 13px; color: #64748b;">${tag}</span>`).join("")}
      </div>
    </div>` : "";

  detailPanel.innerHTML = `
    <div class="detail-content">
      <div class="detail-header">
        <div class="detail-logo">
          <img class="tool-logo" data-fallback-icon="${tool.icon}"
               src="${officialLogoUrl(tool.link)}"
               alt="Logo ${tool.name}">
        </div>
        <div class="detail-info">
          <h2>
            ${tool.name}
            ${badgeLabel ? `<span class="detail-badge ${badgeClass}">${badgeLabel}</span>` : ""}
          </h2>
          <div class="detail-rating">⭐ ${tool.rating.toFixed(1)}/5 • ${categoryLabel}</div>
        </div>
      </div>

      <div class="detail-section">
        <h3>📝 Mô tả</h3>
        <p>${description}</p>
      </div>

      ${featuresHtml}
      ${tagsHtml}

      <div class="detail-action">
        <a href="${tool.link}" target="_blank" rel="noopener" class="btn-visit">${t("btn_use")} →</a>
        <button type="button" class="btn-favorite-detail ${isFavorite ? "is-favorite" : ""}" data-tool-id="${tool.id}" aria-label="${isFavorite ? t("favorite_remove") : t("favorite_add")}" title="${isFavorite ? t("favorite_remove") : t("favorite_add")}">${isFavorite ? "♥" : "♡"}</button>
      </div>
    </div>
  `;

  // Handle logo error
  const logoImg = detailPanel.querySelector(".tool-logo");
  if (logoImg) {
    logoImg.addEventListener("error", () => {
      const span = document.createElement("span");
      span.style.fontSize = "48px";
      span.textContent = logoImg.dataset.fallbackIcon;
      logoImg.replaceWith(span);
    }, { once: true });
  }

  // Handle favorite button in detail panel
  const favBtn = detailPanel.querySelector(".btn-favorite-detail");
  if (favBtn) {
    favBtn.addEventListener("click", () => {
      const id = Number(favBtn.dataset.toolId);
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      saveFavorites();
      renderTools();
      renderToolDetail(tool);
    });
  }

  // Track view
  addToRecent(tool.id);
}

// ---------- SIDEBAR: LỌC DANH MỤC ----------
sidebarItems.forEach(li => {
  li.addEventListener("click", () => {
    clearSidebarActive();
    li.classList.add("active");
    currentCategory = li.dataset.category;
    specialFilter = null;
    searchInput.value = "";
    renderTools();
    showSection("tools");
    sidebarPanel.classList.remove("sidebar-open");
  });
});

// ---------- TÌM KIẾM ----------
searchBtn.addEventListener("click", renderTools);
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderTools();
  searchInput.focus();
});
searchInput.addEventListener("keyup", e => {
  if (e.key === "Enter") renderTools();
  else renderTools();
});

sortTools.addEventListener("change", renderTools);

// ---------- DARK MODE ----------
function applyDarkMode(isDark) {
  document.body.classList.toggle("dark", isDark);
  darkModeBtn.textContent = isDark ? "☀️" : "🌙";
}

function applyCompactMode(isCompact) {
  document.body.classList.toggle("compact", isCompact);
  const label = t(isCompact ? "compact_off" : "compact_on");
  compactModeBtn.setAttribute("aria-label", label);
  compactModeBtn.title = label;
}

darkModeBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyDarkMode(isDark);
  localStorage.setItem("darkMode", isDark ? "1" : "0");
});

compactModeBtn.addEventListener("click", () => {
  const isCompact = !document.body.classList.contains("compact");
  applyCompactMode(isCompact);
  localStorage.setItem("compactMode", isCompact ? "1" : "0");
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("show", window.scrollY > 500);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Khôi phục trạng thái dark mode đã lưu
applyDarkMode(localStorage.getItem("darkMode") === "1");
applyCompactMode(localStorage.getItem("compactMode") === "1");

// ---------- KHỞI CHẠY ----------
document.addEventListener("DOMContentLoaded", () => {
  // Đánh dấu mục "Tất cả AI" đang active mặc định
  sidebarItems.forEach(item => item.classList.remove("active"));
  document.querySelector('.sidebar li[data-category="all"]').classList.add("active");

  // Khôi phục ngôn ngữ đã lưu
  langSelect.value = supportedLanguages.includes(currentLang) ? currentLang : "vi";
  applyTranslations();

  renderKnowledge();
  renderGuide();
  renderTools();
  renderProfession();
  renderRanking();
  showSection("tools");

  // Hide loading screen
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 500);
  }
});

// Also hide loading if content takes more than 3 seconds
window.addEventListener("load", function() {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
});

// Timeout fallback
setTimeout(() => {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
}, 3000);
