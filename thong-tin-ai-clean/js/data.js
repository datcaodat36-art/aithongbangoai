// =======================================
// DU LIEU SONG NGU: KIEN THUC AI
// =======================================
const aiKnowledge = [
  {
    icon: "🤖",
    name: {
      vi: "AI là gì?",
      en: "What is AI?"
    },
    content: {
      vi: "AI, hay trí tuệ nhân tạo, là công nghệ giúp máy tính học hỏi, phân tích dữ liệu và thực hiện các nhiệm vụ thường cần đến trí thông minh của con người. AI có thể trả lời câu hỏi, nhận diện hình ảnh, dịch ngôn ngữ, hỗ trợ lập trình và xử lý nhiều công việc một cách nhanh chóng.",
      en: "AI, or artificial intelligence, is a technology that helps computers learn, analyze data, and perform tasks that normally require human intelligence. It can answer questions, recognize images, translate languages, support coding, and handle many tasks efficiently."
    }
  },
  {
    icon: "🧩",
    name: {
      vi: "Ứng dụng của AI",
      en: "Applications of AI"
    },
    content: {
      vi: "Ngày nay, AI được ứng dụng trong nhiều lĩnh vực như giáo dục, y tế, kinh doanh, thiết kế, lập trình và giải trí. Các công cụ AI có thể hỗ trợ viết nội dung, tạo hình ảnh, phân tích dữ liệu, dịch thuật, lập trình và tự động hóa quy trình để tiết kiệm thời gian và nâng cao hiệu quả làm việc.",
      en: "Today, AI is used across education, healthcare, business, design, software development, and entertainment. AI tools can help with writing, image creation, data analysis, translation, coding, and process automation to save time and improve productivity."
    }
  },
  {
    icon: "💡",
    name: {
      vi: "Lợi ích của AI",
      en: "Benefits of AI"
    },
    content: {
      vi: "AI giúp con người hoàn thành công việc nhanh hơn, giảm thời gian xử lý các tác vụ lặp lại và hỗ trợ sáng tạo trong học tập cũng như công việc. Ngoài ra, AI còn có khả năng phân tích lượng dữ liệu lớn để đưa ra những gợi ý hữu ích, từ đó nâng cao năng suất và chất lượng công việc.",
      en: "AI helps people finish work faster, reduce time spent on repetitive tasks, and support creativity in learning and daily work. It can also analyze large amounts of data to generate useful suggestions that improve quality and productivity."
    }
  },
  {
    icon: "⚠️",
    name: {
      vi: "Hạn chế của AI",
      en: "Limitations of AI"
    },
    content: {
      vi: "Mặc dù rất hữu ích, AI không phải lúc nào cũng đưa ra thông tin chính xác. Kết quả do AI tạo ra có thể chứa sai sót hoặc chưa phù hợp với từng tình huống cụ thể. Vì vậy, người dùng nên kiểm tra và xác minh thông tin trước khi sử dụng trong các quyết định quan trọng.",
      en: "Although AI is very useful, it does not always produce perfectly accurate information. Its output may contain mistakes or may not fit every specific situation. That is why users should review and verify AI-generated content before using it in important decisions."
    }
  }
];

// Bổ sung để danh mục có đúng 100 công cụ. Mỗi mục dùng trang chính thức và
// được xếp điểm tham khảo theo chất lượng, mức độ phổ biến và tính ứng dụng.
const additionalAiTools = [
  [52, "Leonardo AI", "image", "🎨", "leonardo", "Tạo ảnh AI linh hoạt với nhiều model và công cụ chỉnh sửa.", "Flexible AI image creation with multiple models and editing tools.", "free", 4.6, "https://leonardo.ai"],
  [53, "Recraft", "image", "🖍️", "recraft", "Tạo hình minh hoạ, icon và đồ hoạ vector bằng AI.", "AI creation for illustrations, icons, and vector graphics.", "free", 4.6, "https://www.recraft.ai"],
  [54, "Krea AI", "image", "✨", "krea", "Tạo và nâng cấp hình ảnh AI theo thời gian thực.", "Real-time AI image generation and enhancement.", "free", 4.5, "https://www.krea.ai"],
  [55, "PhotoRoom", "image", "📷", "photoroom", "Xoá nền và tạo ảnh sản phẩm nhanh bằng AI.", "AI product-photo creation and background removal.", "free", 4.6, "https://www.photoroom.com"],
  [56, "remove.bg", "image", "✂️", "removebg", "Tách nền ảnh tự động chỉ với một lần tải lên.", "Automatic image background removal in one upload.", "free", 4.5, "https://www.remove.bg"],
  [57, "Microsoft Designer", "image", "🪄", "designer", "Thiết kế bài đăng và hình ảnh truyền thông bằng AI.", "AI-assisted social posts and visual design.", "free", 4.5, "https://designer.microsoft.com"],
  [58, "Freepik AI", "image", "🖼️", "freepik", "Bộ công cụ tạo ảnh, mockup và chỉnh sửa thiết kế bằng AI.", "AI tools for images, mockups, and design editing.", "free", 4.5, "https://www.freepik.com/ai"],
  [59, "Dreamina", "image", "🌈", "dreamina", "Tạo ảnh AI và nội dung sáng tạo trong hệ sinh thái CapCut.", "AI image generation for creative content in the CapCut ecosystem.", "free", 4.4, "https://dreamina.capcut.com"],
  [60, "Figma AI", "image", "🎯", "figma", "Các tính năng AI hỗ trợ thiết kế giao diện và quy trình sản phẩm.", "AI features for interface design and product workflows.", "pro", 4.6, "https://www.figma.com/ai"],
  [61, "Descript", "video", "🎙️", "descript", "Chỉnh sửa video và podcast bằng cách chỉnh sửa văn bản.", "Edit video and podcasts by editing the transcript.", "free", 4.6, "https://www.descript.com"],
  [62, "OpusClip", "video", "📱", "opusclip", "Tự động cắt video dài thành các clip ngắn cho mạng xã hội.", "Turns long videos into social-ready short clips automatically.", "free", 4.6, "https://www.opus.pro"],
  [63, "VEED", "video", "🎞️", "veed", "Tạo, dịch và thêm phụ đề video trực tuyến bằng AI.", "AI-assisted online video creation, translation, and captions.", "free", 4.5, "https://www.veed.io"],
  [64, "Filmora AI", "video", "🎬", "filmora", "Trình dựng video có công cụ AI cho người mới bắt đầu.", "Beginner-friendly video editor with AI tools.", "free", 4.4, "https://filmora.wondershare.com"],
  [65, "Adobe Premiere Pro", "video", "🎥", "premiere", "Dựng phim chuyên nghiệp với các tính năng AI của Adobe.", "Professional video editing with Adobe AI features.", "pro", 4.7, "https://www.adobe.com/products/premiere.html"],
  [66, "Vidnoz AI", "video", "🧑‍💼", "vidnoz", "Tạo video avatar AI và thuyết minh đa ngôn ngữ.", "AI avatar videos with multilingual voiceovers.", "free", 4.4, "https://www.vidnoz.com"],
  [67, "Akool", "video", "🧬", "akool", "Nền tảng video AI với avatar và dịch khuôn mặt.", "AI video platform for avatars and face translation.", "free", 4.4, "https://akool.com"],
  [68, "GitLab Duo", "code", "🦊", "gitlab", "Trợ lý AI hỗ trợ toàn bộ vòng đời phát triển phần mềm.", "AI assistance across the software development lifecycle.", "pro", 4.5, "https://about.gitlab.com/gitlab-duo"],
  [69, "Tabnine", "code", "⌨️", "tabnine", "Gợi ý và hoàn thành mã nguồn trong nhiều IDE.", "Code completion and suggestions across many IDEs.", "free", 4.4, "https://www.tabnine.com"],
  [70, "Replit", "code", "⚙️", "replit", "Nền tảng lập trình trên web với AI Agent để tạo ứng dụng.", "Web development platform with an AI agent for building apps.", "free", 4.6, "https://replit.com"],
  [71, "Devin", "code", "🤖", "devin", "AI agent hỗ trợ thực hiện tác vụ lập trình phức tạp.", "AI agent for handling multi-step software tasks.", "pro", 4.5, "https://devin.ai"],
  [72, "Sourcegraph Cody", "code", "🔎", "sourcegraph", "Trợ lý hiểu codebase để tìm kiếm và viết mã.", "Codebase-aware assistant for search and coding.", "free", 4.4, "https://sourcegraph.com/cody"],
  [73, "JetBrains AI Assistant", "code", "🧩", "jetbrains", "Trợ lý AI tích hợp trong các IDE của JetBrains.", "AI assistant built into JetBrains IDEs.", "pro", 4.5, "https://www.jetbrains.com/ai"],
  [74, "Continue", "code", "🔁", "continue", "Trợ lý lập trình mã nguồn mở, có thể dùng model riêng.", "Open-source coding assistant that can use your choice of models.", "free", 4.4, "https://www.continue.dev"],
  [75, "Aider", "code", "🛠️", "aider", "Công cụ AI chạy trong terminal để lập trình cùng Git.", "Terminal-based AI pair programmer that works with Git.", "free", 4.5, "https://aider.chat"],
  [76, "v0", "code", "⚡", "v0", "Tạo giao diện web từ mô tả bằng ngôn ngữ tự nhiên.", "Generates web interfaces from natural-language descriptions.", "free", 4.6, "https://v0.dev"],
  [77, "Bolt.new", "code", "⚡", "bolt", "Tạo và chạy ứng dụng web ngay trong trình duyệt với AI.", "Build and run web apps in the browser with AI.", "free", 4.6, "https://bolt.new"],
  [78, "Lovable", "code", "💜", "lovable", "Tạo ứng dụng web từ yêu cầu bằng ngôn ngữ tự nhiên.", "Creates web applications from natural-language requirements.", "free", 4.6, "https://lovable.dev"],
  [79, "Firebase Studio", "code", "🔥", "firebase", "Môi trường phát triển ứng dụng AI trên nền tảng Firebase.", "AI application development environment on Firebase.", "free", 4.5, "https://firebase.studio"],
  [80, "Phind", "code", "🔍", "phind", "Công cụ tìm kiếm và trợ lý AI tối ưu cho lập trình viên.", "AI search and assistant optimized for developers.", "free", 4.5, "https://www.phind.com"],
  [81, "HuggingChat", "chat", "🤗", "huggingface", "Trợ lý hội thoại miễn phí từ hệ sinh thái Hugging Face.", "Free conversational assistant from the Hugging Face ecosystem.", "free", 4.4, "https://huggingface.co/chat"],
  [82, "Poe", "chat", "💬", "poe", "Một nơi để dùng và so sánh nhiều chatbot AI khác nhau.", "One place to use and compare many AI chatbots.", "free", 4.5, "https://poe.com"],
  [83, "You.com", "chat", "🌐", "you", "Tìm kiếm và trò chuyện với AI có hỗ trợ nghiên cứu.", "AI search and chat with research support.", "free", 4.4, "https://you.com"],
  [84, "Character.AI", "chat", "🗨️", "characterai", "Tạo và trò chuyện với các nhân vật AI tuỳ biến.", "Create and chat with customizable AI characters.", "free", 4.4, "https://character.ai"],
  [85, "NotebookLM", "study", "📓", "notebooklm", "Nghiên cứu và hỏi đáp trực tiếp trên tài liệu của bạn.", "Research and ask questions directly across your own sources.", "free", 4.8, "https://notebooklm.google.com"],
  [86, "Elicit", "study", "🔬", "elicit", "Trợ lý AI để tìm, tóm tắt và phân tích nghiên cứu.", "AI assistant for finding, summarizing, and analyzing research.", "free", 4.6, "https://elicit.com"],
  [87, "Consensus", "study", "📚", "consensus", "Tìm câu trả lời dựa trên các bài báo khoa học.", "Find evidence-based answers from scientific papers.", "free", 4.6, "https://consensus.app"],
  [88, "Scite", "study", "📖", "scite", "Phân tích trích dẫn khoa học và ngữ cảnh của chúng.", "Analyzes scientific citations and their context.", "pro", 4.5, "https://scite.ai"],
  [89, "Otter.ai", "study", "📝", "otter", "Ghi âm, chép lời và tóm tắt cuộc họp bằng AI.", "AI meeting transcription, notes, and summaries.", "free", 4.6, "https://otter.ai"],
  [90, "Photomath", "study", "➗", "photomath", "Quét bài toán và nhận hướng dẫn giải từng bước.", "Scan math problems and get step-by-step solutions.", "free", 4.5, "https://photomath.com"],
  [91, "Brainly AI", "study", "🧠", "brainly", "Hỗ trợ giải bài tập và giải thích kiến thức cho học sinh.", "Homework help and explanations for students.", "free", 4.4, "https://brainly.com"],
  [92, "ELSA Speak", "study", "🗣️", "elsa", "Luyện phát âm tiếng Anh với phản hồi AI cá nhân hoá.", "Practice English pronunciation with personalized AI feedback.", "free", 4.5, "https://elsaspeak.com"],
  [93, "ElevenLabs", "study", "🔊", "elevenlabs", "Tạo giọng nói AI tự nhiên cho nội dung và học tập.", "Natural AI voices for content and learning.", "free", 4.7, "https://elevenlabs.io"],
  [94, "Jasper", "chat", "✍️", "jasper", "Trợ lý AI chuyên viết nội dung và marketing.", "AI assistant focused on marketing and content creation.", "pro", 4.5, "https://www.jasper.ai"],
  [95, "Copy.ai", "chat", "📣", "copyai", "Tạo nội dung marketing và tự động hoá quy trình bán hàng.", "Marketing copy generation and sales-workflow automation.", "free", 4.4, "https://www.copy.ai"],
  [96, "Writesonic", "chat", "📝", "writesonic", "Viết nội dung, SEO và làm việc với AI agent.", "AI writing, SEO, and agentic workflows.", "free", 4.4, "https://writesonic.com"],
  [97, "HubSpot Breeze", "chat", "🧡", "hubspot", "Các tính năng AI cho marketing, bán hàng và chăm sóc khách hàng.", "AI features for marketing, sales, and customer service.", "pro", 4.5, "https://www.hubspot.com/products/artificial-intelligence"],
  [98, "Salesforce Einstein", "chat", "☁️", "salesforce", "AI cho dữ liệu khách hàng, bán hàng và dịch vụ doanh nghiệp.", "Enterprise AI for customer data, sales, and service.", "pro", 4.5, "https://www.salesforce.com/ai"],
  [99, "Suno", "study", "🎵", "suno", "Tạo bài nhạc và bài hát từ mô tả bằng AI.", "Generate songs and music from text descriptions.", "free", 4.6, "https://suno.com"],
  [100, "Udio", "study", "🎼", "udio", "Tạo nhạc AI với khả năng tuỳ chỉnh phong cách và lời bài hát.", "AI music generation with customizable style and lyrics.", "free", 4.5, "https://www.udio.com"]
].map(([id, name, category, icon, logo, vi, en, badge, rating, link]) => ({
  id, name, category, icon, logo, description: { vi, en }, badge, rating, link
}));

// =======================================
// DU LIEU SONG NGU: HUONG DAN SU DUNG AI
// =======================================
const aiGuide = [
  {
    icon: "🎯",
    name: {
      vi: "Bước 1: Chọn công cụ AI phù hợp",
      en: "Step 1: Choose the right AI tool"
    },
    content: {
      vi: "Trước tiên, hãy xác định mục đích sử dụng của bạn. Nếu bạn cần hỗ trợ học tập, viết nội dung hoặc lập trình, hãy chọn công cụ AI phù hợp với nhu cầu. Chọn đúng công cụ sẽ giúp bạn đạt được kết quả tốt hơn.",
      en: "Start by identifying your goal. If you need help with learning, writing, or coding, choose an AI tool that matches that need. Selecting the right tool usually leads to better results."
    }
  },
  {
    icon: "✍️",
    name: {
      vi: "Bước 2: Đặt câu hỏi rõ ràng",
      en: "Step 2: Write clear prompts"
    },
    content: {
      vi: "AI sẽ trả lời chính xác hơn khi bạn đưa ra yêu cầu cụ thể. Thay vì đặt câu hỏi ngắn hoặc mơ hồ, hãy mô tả rõ mục tiêu, nội dung cần thực hiện và yêu cầu về độ dài hoặc phong cách nếu cần.",
      en: "AI responds better when you give clear and specific instructions. Instead of vague prompts, describe your goal, the task details, and any preferences for length or tone."
    }
  },
  {
    icon: "🔍",
    name: {
      vi: "Bước 3: Kiểm tra kết quả",
      en: "Step 3: Review the output"
    },
    content: {
      vi: "Sau khi AI trả lời, hãy đọc và kiểm tra lại nội dung. Đối với thông tin quan trọng như bài học, số liệu hoặc tài liệu nghiên cứu, bạn nên đối chiếu với các nguồn đáng tin cậy để đảm bảo tính chính xác.",
      en: "After AI generates a result, review it carefully. For important information such as lessons, numbers, or research material, compare it with reliable sources to ensure accuracy."
    }
  },
  {
    icon: "🛠️",
    name: {
      vi: "Bước 4: Chỉnh sửa và tối ưu",
      en: "Step 4: Refine and improve"
    },
    content: {
      vi: "Nếu kết quả chưa đúng ý, bạn có thể yêu cầu AI chỉnh sửa, bổ sung hoặc viết lại theo phong cách mong muốn. Việc trao đổi nhiều lần sẽ giúp AI hiểu yêu cầu rõ hơn và tạo ra nội dung chất lượng hơn.",
      en: "If the result is not quite right, ask AI to revise, expand, or rewrite it in the style you want. Iterating a few times usually helps AI understand your request better and produce stronger content."
    }
  },
  {
    icon: "🔒",
    name: {
      vi: "Lưu ý khi sử dụng AI",
      en: "Important safety tips"
    },
    content: {
      vi: "Không nên chia sẻ thông tin cá nhân hoặc dữ liệu nhạy cảm với AI. Hãy sử dụng AI như một công cụ hỗ trợ thay vì phụ thuộc hoàn toàn, đồng thời tôn trọng bản quyền và kiểm tra nội dung trước khi đưa vào học tập hoặc công việc.",
      en: "Do not share personal or sensitive data with AI tools. Use AI as support rather than depending on it completely, respect copyright, and always review content before using it for school or work."
    }
  }
];

// =======================================
// DU LIEU SONG NGU: DANH SACH CONG CU AI
// category phai khop voi data-category trong sidebar:
// chat | image | video | code | finance | study
// badge: free | pro | hot
// =======================================
const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "chat",
    icon: "🤖",
    logo: "openai",
    description: {
      vi: "Chatbot AI đa năng của OpenAI, hỗ trợ trò chuyện, viết lách, lập trình và giải đáp thắc mắc.",
      en: "OpenAI's all-purpose AI chatbot for conversation, writing, coding, and answering questions."
    },
    badge: "free",
    rating: 4.8,
    link: "https://chat.openai.com"
  },
  {
    id: 2,
    name: "Google Gemini",
    category: "chat",
    icon: "✨",
    logo: "gemini",
    description: {
      vi: "Trợ lý AI của Google, tích hợp sâu với Search, Gmail và các dịch vụ Google khác.",
      en: "Google's AI assistant with deep integration across Search, Gmail, and other Google services."
    },
    badge: "free",
    rating: 4.6,
    link: "https://gemini.google.com"
  },
  {
    id: 3,
    name: "Claude",
    category: "chat",
    icon: "🧠",
    logo: "claude",
    description: {
      vi: "AI của Anthropic, nổi bật về tư duy logic, viết văn bản dài và xử lý tài liệu phức tạp.",
      en: "Anthropic's AI assistant known for strong reasoning, long-form writing, and document handling."
    },
    badge: "free",
    rating: 4.9,
    link: "https://claude.ai"
  },
  {
    id: 4,
    name: "Grok",
    category: "chat",
    icon: "💬",
    logo: "grok",
    description: {
      vi: "Chatbot AI của xAI, tích hợp trên nền tảng X với khả năng cập nhật thông tin nhanh.",
      en: "xAI's chatbot integrated with X, designed for fast access to current information."
    },
    badge: "hot",
    rating: 4.3,
    link: "https://x.ai"
  },
  {
    id: 5,
    name: "Midjourney",
    category: "image",
    icon: "🎨",
    logo: "midjourney",
    description: {
      vi: "Công cụ tạo ảnh AI nổi tiếng với chất lượng nghệ thuật cao và phong cách độc đáo.",
      en: "A leading AI image generator known for artistic quality and distinctive visual styles."
    },
    badge: "pro",
    rating: 4.7,
    link: "https://midjourney.com"
  },
  {
    id: 6,
    name: "DALL·E 3",
    category: "image",
    icon: "🖼️",
    logo: "dalle",
    description: {
      vi: "Công cụ tạo ảnh từ văn bản của OpenAI, được tích hợp trong ChatGPT.",
      en: "OpenAI's text-to-image model, available directly inside ChatGPT."
    },
    badge: "free",
    rating: 4.5,
    link: "https://openai.com/dall-e-3"
  },
  {
    id: 7,
    name: "Adobe Firefly",
    category: "image",
    icon: "🔥",
    logo: "firefly",
    description: {
      vi: "AI tạo và chỉnh sửa ảnh của Adobe, tích hợp trực tiếp trong bộ công cụ sáng tạo.",
      en: "Adobe's AI suite for image generation and editing, integrated into creative workflows."
    },
    badge: "free",
    rating: 4.4,
    link: "https://firefly.adobe.com"
  },
  {
    id: 8,
    name: "Runway",
    category: "video",
    icon: "🎬",
    logo: "runway",
    description: {
      vi: "Nền tảng AI tạo và chỉnh sửa video chuyên nghiệp, hỗ trợ text-to-video.",
      en: "A professional AI video platform for generating and editing video, including text-to-video."
    },
    badge: "pro",
    rating: 4.5,
    link: "https://runwayml.com"
  },
  {
    id: 9,
    name: "Sora",
    category: "video",
    icon: "🎥",
    logo: "sora",
    description: {
      vi: "AI tạo video từ văn bản của OpenAI với hình ảnh chân thực và chuyển động mượt mà.",
      en: "OpenAI's text-to-video model focused on realistic visuals and smooth motion."
    },
    badge: "hot",
    rating: 4.6,
    link: "https://openai.com/sora"
  },
  {
    id: 10,
    name: "Pika",
    category: "video",
    icon: "📹",
    logo: "pika",
    description: {
      vi: "Công cụ tạo video AI dễ sử dụng, phù hợp cho nội dung mạng xã hội.",
      en: "An easy-to-use AI video tool well suited for social media content."
    },
    badge: "free",
    rating: 4.2,
    link: "https://pika.art"
  },
  {
    id: 11,
    name: "GitHub Copilot",
    category: "code",
    icon: "💻",
    logo: "githubcopilot",
    description: {
      vi: "Trợ lý lập trình AI trong IDE, gợi ý code thông minh theo thời gian thực.",
      en: "An AI coding assistant inside your IDE that provides real-time code suggestions."
    },
    badge: "pro",
    rating: 4.7,
    link: "https://github.com/features/copilot"
  },
  {
    id: 12,
    name: "Cursor",
    category: "code",
    icon: "⌨️",
    logo: "cursor",
    description: {
      vi: "Trình soạn thảo code tích hợp AI mạnh mẽ, hỗ trợ chat và sửa lỗi nhanh.",
      en: "An AI-first code editor with chat features and fast code assistance."
    },
    badge: "free",
    rating: 4.6,
    link: "https://cursor.sh"
  },
  {
    id: 13,
    name: "Microsoft Copilot",
    category: "chat",
    icon: "📊",
    logo: "copilot",
    description: {
      vi: "Trợ lý AI của Microsoft hỗ trợ công việc văn phòng, tìm kiếm và tổng hợp thông tin.",
      en: "Microsoft's AI assistant for productivity, search, and everyday office tasks."
    },
    badge: "pro",
    rating: 4.4,
    link: "https://copilot.microsoft.com"
  },
  {
    id: 14,
    name: "Notion AI",
    category: "chat",
    icon: "📝",
    logo: "notion",
    description: {
      vi: "Trợ lý AI trong Notion, hỗ trợ viết, tóm tắt và tổ chức công việc.",
      en: "Notion's built-in AI assistant for writing, summarizing, and organizing work."
    },
    badge: "free",
    rating: 4.5,
    link: "https://notion.so/product/ai"
  },
  {
    id: 15,
    name: "Khanmigo",
    category: "study",
    icon: "📚",
    logo: "khanacademy",
    description: {
      vi: "AI của Khan Academy giúp giải thích bài học và hướng dẫn học sinh theo từng bước.",
      en: "Khan Academy's AI tutor that explains lessons and guides students step by step."
    },
    badge: "free",
    rating: 4.5,
    link: "https://khanacademy.org/khan-labs"
  },
  {
    id: 16,
    name: "Duolingo Max",
    category: "study",
    icon: "🦉",
    logo: "duolingo",
    description: {
      vi: "Phiên bản AI nâng cao của Duolingo giúp luyện nói và giải thích ngữ pháp.",
      en: "Duolingo's enhanced AI plan for speaking practice and grammar explanations."
    },
    badge: "pro",
    rating: 4.6,
    link: "https://duolingo.com"
  },
  {
    id: 17,
    name: "Perplexity",
    category: "chat",
    icon: "🔍",
    logo: "perplexity",
    description: {
      vi: "Công cụ tìm kiếm AI có trích dẫn nguồn để tham khảo nhanh.",
      en: "An AI search engine that provides cited sources for faster research."
    },
    badge: "free",
    rating: 4.8,
    link: "https://perplexity.ai"
  },
  {
    id: 18,
    name: "DeepSeek",
    category: "chat",
    icon: "🐋",
    logo: "deepseek",
    description: {
      vi: "Mô hình AI mạnh về lập trình và suy luận.",
      en: "An AI model known for strong coding and reasoning performance."
    },
    badge: "free",
    rating: 4.8,
    link: "https://chat.deepseek.com"
  },
  {
    id: 19,
    name: "Qwen",
    category: "chat",
    icon: "🌐",
    logo: "qwen",
    description: {
      vi: "Trợ lý AI của Alibaba cho nhiều nhu cầu hỏi đáp và làm việc.",
      en: "Alibaba's AI assistant for general productivity and question answering."
    },
    badge: "free",
    rating: 4.7,
    link: "https://chat.qwen.ai"
  },
  {
    id: 20,
    name: "Meta AI",
    category: "chat",
    icon: "∞",
    logo: "meta",
    description: {
      vi: "Trợ lý AI của Meta được tích hợp trong hệ sinh thái sản phẩm của hãng.",
      en: "Meta's AI assistant integrated across the company's product ecosystem."
    },
    badge: "free",
    rating: 4.7,
    link: "https://www.meta.ai"
  },
  {
    id: 21,
    name: "Kimi",
    category: "chat",
    icon: "🌙",
    logo: "kimi",
    description: {
      vi: "Trợ lý AI của Moonshot hỗ trợ hỏi đáp và xử lý thông tin.",
      en: "Moonshot's AI assistant for research, conversation, and information handling."
    },
    badge: "free",
    rating: 4.7,
    link: "https://kimi.com"
  },
  {
    id: 22,
    name: "Mistral",
    category: "chat",
    icon: "⚡",
    logo: "mistral",
    description: {
      vi: "Le Chat của Mistral, phù hợp cho hỏi đáp và công việc hằng ngày.",
      en: "Mistral's Le Chat assistant for everyday work and conversations."
    },
    badge: "free",
    rating: 4.7,
    link: "https://chat.mistral.ai"
  },
  {
    id: 23,
    name: "Codeium",
    category: "code",
    icon: "💻",
    logo: "codeium",
    description: {
      vi: "Công cụ AI hỗ trợ lập trình, gợi ý code và giải thích mã nguồn.",
      en: "An AI coding tool for code completion, suggestions, and source explanation."
    },
    badge: "free",
    rating: 4.6,
    link: "https://codeium.com"
  },
  {
    id: 24,
    name: "Windsurf",
    category: "code",
    icon: "🌊",
    logo: "windsurf",
    description: {
      vi: "IDE hướng AI giúp lập trình nhanh hơn và dễ thao tác hơn.",
      en: "An AI-focused IDE designed to speed up software development."
    },
    badge: "free",
    rating: 4.7,
    link: "https://windsurf.com"
  },
  {
    id: 25,
    name: "Amazon Q",
    category: "code",
    icon: "📦",
    logo: "amazon",
    description: {
      vi: "Trợ lý AI của AWS hỗ trợ lập trình và công việc doanh nghiệp.",
      en: "AWS's AI assistant for coding and enterprise productivity."
    },
    badge: "free",
    rating: 4.5,
    link: "https://aws.amazon.com/q/"
  },
  {
    id: 26,
    name: "Canva AI",
    category: "image",
    icon: "🎨",
    logo: "canva",
    description: {
      vi: "Bộ công cụ AI trong Canva để thiết kế, viết nội dung và tạo hình nhanh.",
      en: "Canva's AI features for design, content creation, and quick visual editing."
    },
    badge: "free",
    rating: 4.8,
    link: "https://canva.com"
  },
  {
    id: 27,
    name: "Gamma",
    category: "study",
    icon: "📊",
    logo: "gamma",
    description: {
      vi: "Công cụ AI tạo slide và tài liệu thuyết trình nhanh.",
      en: "An AI presentation tool for creating slides and documents quickly."
    },
    badge: "free",
    rating: 4.7,
    link: "https://gamma.app"
  },
  {
    id: 28,
    name: "FLUX",
    category: "image",
    icon: "🖼️",
    logo: "flux",
    description: {
      vi: "Mô hình AI tạo ảnh chất lượng cao.",
      en: "A high-quality AI image generation model."
    },
    badge: "free",
    rating: 4.8,
    link: "https://blackforestlabs.ai"
  },
  {
    id: 29,
    name: "Ideogram",
    category: "image",
    icon: "🖌️",
    logo: "ideogram",
    description: {
      vi: "Công cụ AI tạo ảnh và xử lý chữ trong hình ảnh rất tốt.",
      en: "An AI image generator especially strong at rendering text in images."
    },
    badge: "free",
    rating: 4.8,
    link: "https://ideogram.ai"
  },
  {
    id: 30,
    name: "Stable Diffusion",
    category: "image",
    icon: "🎆",
    logo: "stability",
    description: {
      vi: "Mô hình tạo ảnh phổ biến, linh hoạt và có cộng đồng lớn.",
      en: "A widely used and flexible image generation model with a large community."
    },
    badge: "free",
    rating: 4.7,
    link: "https://stability.ai"
  },
  {
    id: 31,
    name: "FinChat",
    category: "finance",
    icon: "📈",
    logo: "finchat",
    description: {
      vi: "Nền tảng AI phân tích cổ phiếu, báo cáo tài chính và dữ liệu doanh nghiệp.",
      en: "An AI platform for analyzing stocks, financial reports, and company data."
    },
    badge: "free",
    rating: 4.5,
    link: "https://finchat.io"
  },
  {
    id: 32,
    name: "AlphaSense",
    category: "finance",
    icon: "🔎",
    logo: "alphasense",
    description: {
      vi: "Công cụ AI cho doanh nghiệp để tìm kiếm và phân tích tài liệu tài chính và tin tức thị trường.",
      en: "An enterprise AI platform for searching and analyzing financial documents and market news."
    },
    badge: "pro",
    rating: 4.6,
    link: "https://alpha-sense.com"
  },
  {
    id: 33,
    name: "BloombergGPT",
    category: "finance",
    icon: "📊",
    logo: "bloomberg",
    description: {
      vi: "Mô hình AI phục vụ phân tích thị trường, tin tức và dữ liệu tài chính chuyên sâu.",
      en: "An AI model built for advanced financial data, market, and news analysis."
    },
    badge: "pro",
    rating: 4.5,
    link: "https://bloomberg.com"
  },
  {
    id: 34,
    name: "Kavout",
    category: "finance",
    icon: "📉",
    logo: "kavout",
    description: {
      vi: "Công cụ AI hỗ trợ phân tích cổ phiếu, đánh giá xu hướng và xây dựng danh mục đầu tư.",
      en: "An AI investing tool for stock analysis, trend evaluation, and portfolio support."
    },
    badge: "free",
    rating: 4.3,
    link: "https://kavout.com"
  },
  {
    id: 35,
    name: "Incite AI",
    category: "finance",
    icon: "📰",
    logo: "inciteai",
    description: {
      vi: "Công cụ tham khảo cho phân tích chứng khoán và xu hướng giá.",
      en: "An AI assistant for stock research and price trend insights."
    },
    badge: "free",
    rating: 4.2,
    link: "https://incite.ai"
  },
  {
    id: 36,
    name: "Magnifi",
    category: "finance",
    icon: "💹",
    logo: "magnifi",
    description: {
      vi: "AI giúp tìm quỹ đầu tư, ETF và cổ phiếu dựa trên mục tiêu tài chính của người dùng.",
      en: "An AI investing search tool for funds, ETFs, and stocks based on user goals."
    },
    badge: "free",
    rating: 4.3,
    link: "https://magnifi.com"
  },
  {
    id: 37,
    name: "Danelfin",
    category: "finance",
    icon: "⭐",
    logo: "danelfin",
    description: {
      vi: "Nền tảng AI chấm điểm cổ phiếu dựa trên chỉ số tài chính và kỹ thuật.",
      en: "An AI stock rating platform based on financial and technical indicators."
    },
    badge: "pro",
    rating: 4.4,
    link: "https://danelfin.com"
  },
  {
    id: 38,
    name: "TrendSpider",
    category: "finance",
    icon: "🕸️",
    logo: "trendspider",
    description: {
      vi: "Công cụ AI hỗ trợ phân tích biểu đồ, phát hiện xu hướng và tự động hóa kỹ thuật.",
      en: "An AI platform for chart analysis, trend detection, and technical automation."
    },
    badge: "pro",
    rating: 4.5,
    link: "https://trendspider.com"
  },
  {
    id: 39,
    name: "Tickeron",
    category: "finance",
    icon: "🎯",
    logo: "tickeron",
    description: {
      vi: "Nền tảng AI cung cấp tín hiệu giao dịch và hỗ trợ ra quyết định cho nhà đầu tư.",
      en: "An AI platform that provides trading signals and decision support for investors."
    },
    badge: "free",
    rating: 4.3,
    link: "https://tickeron.com"
  },
  {
    id: 40,
    name: "Quizlet AI",
    category: "study",
    icon: "🗂️",
    logo: "quizlet",
    description: {
      vi: "Công cụ tạo flashcard, câu hỏi ôn tập và bài kiểm tra để học hiệu quả hơn.",
      en: "An AI study assistant for creating flashcards, review questions, and practice tests."
    },
    badge: "free",
    rating: 4.6,
    link: "https://quizlet.com"
  },
  {
    id: 41,
    name: "Socratic",
    category: "study",
    icon: "📐",
    logo: "socratic",
    description: {
      vi: "Ứng dụng AI của Google giúp giải bài tập và học nhiều môn qua hình ảnh hoặc câu hỏi.",
      en: "Google's AI learning app that helps solve homework through photos and questions."
    },
    badge: "free",
    rating: 4.5,
    link: "https://socratic.org"
  },
  {
    id: 42,
    name: "Wolfram Alpha",
    category: "study",
    icon: "🧮",
    logo: "wolframalpha",
    description: {
      vi: "Công cụ tính toán, giải toán và phân tích dữ liệu mạnh cho các môn STEM.",
      en: "A powerful computational engine for math, science, and STEM problem solving."
    },
    badge: "free",
    rating: 4.7,
    link: "https://wolframalpha.com"
  },
  {
    id: 43,
    name: "Grammarly",
    category: "study",
    icon: "✅",
    logo: "grammarly",
    description: {
      vi: "Công cụ hỗ trợ chính tả, ngữ pháp và cải thiện kỹ năng viết tiếng Anh.",
      en: "A writing assistant for spelling, grammar, and clearer English communication."
    },
    badge: "free",
    rating: 4.6,
    link: "https://grammarly.com"
  },
  {
    id: 44,
    name: "Veo",
    category: "video",
    icon: "🎞️",
    logo: "veo",
    description: {
      vi: "Mô hình tạo video của Google với chất lượng cao và chuyển động tự nhiên.",
      en: "Google's video generation model with high-quality output and natural motion."
    },
    badge: "hot",
    rating: 4.7,
    link: "https://deepmind.google/technologies/veo"
  },
  {
    id: 45,
    name: "Kling AI",
    category: "video",
    icon: "🎬",
    logo: "kling",
    description: {
      vi: "Công cụ tạo video từ văn bản hoặc hình ảnh với hiệu ứng chân thực.",
      en: "An AI video generator that turns text or images into polished videos."
    },
    badge: "free",
    rating: 4.6,
    link: "https://klingai.com"
  },
  {
    id: 46,
    name: "Hailuo AI",
    category: "video",
    icon: "🎥",
    logo: "hailuo",
    description: {
      vi: "Công cụ chuyển văn bản thành video nhanh cho nội dung ngắn và quảng cáo.",
      en: "A fast text-to-video tool for short-form content and promotional clips."
    },
    badge: "free",
    rating: 4.4,
    link: "https://hailuoai.video"
  },
  {
    id: 47,
    name: "Luma AI",
    category: "video",
    icon: "🌀",
    logo: "luma",
    description: {
      vi: "Nền tảng tạo video 3D và video AI có chất lượng điện ảnh.",
      en: "An AI platform for 3D scenes and cinematic-quality video creation."
    },
    badge: "free",
    rating: 4.5,
    link: "https://lumalabs.ai"
  },
  {
    id: 48,
    name: "Synthesia",
    category: "video",
    icon: "🧑‍💼",
    logo: "synthesia",
    description: {
      vi: "Công cụ tạo video với người dẫn chương trình ảo, phù hợp cho đào tạo và giới thiệu sản phẩm.",
      en: "An AI avatar video tool often used for training, demos, and product explainers."
    },
    badge: "pro",
    rating: 4.6,
    link: "https://synthesia.io"
  },
  {
    id: 49,
    name: "HeyGen",
    category: "video",
    icon: "🗣️",
    logo: "heygen",
    description: {
      vi: "Nền tảng tạo video AI với nhân vật ảo, lồng tiếng tự động và hỗ trợ nhiều ngôn ngữ.",
      en: "An AI video platform with avatars, voiceover generation, and multilingual support."
    },
    badge: "pro",
    rating: 4.6,
    link: "https://heygen.com"
  },
  {
    id: 50,
    name: "InVideo AI",
    category: "video",
    icon: "🎦",
    logo: "invideo",
    description: {
      vi: "Công cụ tạo video hoàn chỉnh từ văn bản, tự động thêm hình, giọng đọc và nhạc nền.",
      en: "An AI video creator that turns text into full videos with visuals, voice, and music."
    },
    badge: "free",
    rating: 4.4,
    link: "https://invideo.io"
  },
  {
    id: 51,
    name: "CapCut AI",
    category: "video",
    icon: "✂️",
    logo: "capcut",
    description: {
      vi: "Bộ tính năng AI cho tạo video tự động, phụ đề, xóa nền và chỉnh sửa nhanh.",
      en: "CapCut's AI feature set for automatic video editing, captions, and background removal."
    },
    badge: "free",
    rating: 4.7,
    link: "https://capcut.com"
  }
];

aiTools.push(...additionalAiTools);

// =======================================
// DU LIEU SONG NGU: AI THEO NGHE
// =======================================
const aiByProfession = [
  {
    icon: "💼",
    title: { vi: "AI cho Dân văn phòng", en: "AI for Office Workers" },
    intro: { vi: "Sử dụng AI để:", en: "Use AI to:" },
    tasks: [
      { vi: "Soạn email chuyên nghiệp", en: "Write professional emails" },
      { vi: "Viết báo cáo", en: "Write reports" },
      { vi: "Tóm tắt tài liệu", en: "Summarize documents" },
      { vi: "Dịch văn bản", en: "Translate text" },
      { vi: "Tạo slide thuyết trình", en: "Create presentation slides" }
    ],
    suggested: ["ChatGPT", "Claude", "Gemini", "Gamma", "Notion AI"]
  },
  {
    icon: "💻",
    title: { vi: "AI cho Lập trình viên", en: "AI for Developers" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết mã nguồn", en: "Write source code" },
      { vi: "Giải thích code", en: "Explain code" },
      { vi: "Sửa lỗi", en: "Fix bugs" },
      { vi: "Tạo website", en: "Build websites" },
      { vi: "Viết tài liệu kỹ thuật", en: "Write technical documentation" }
    ],
    suggested: ["Claude", "ChatGPT", "GitHub Copilot", "Gemini", "Cursor"]
  },
  {
    icon: "🎨",
    title: { vi: "AI cho Thiết kế", en: "AI for Designers" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Tạo hình ảnh", en: "Generate images" },
      { vi: "Thiết kế logo", en: "Design logos" },
      { vi: "Banner quảng cáo", en: "Create ad banners" },
      { vi: "Chỉnh sửa ảnh", en: "Edit photos" },
      { vi: "Xóa nền", en: "Remove backgrounds" }
    ],
    suggested: ["Midjourney", "Canva AI", "Adobe Firefly", "Ideogram", "Leonardo AI"]
  },
  {
    icon: "🎬",
    title: { vi: "AI cho Người làm Video", en: "AI for Video Creators" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Tạo video từ văn bản", en: "Generate video from text" },
      { vi: "Tạo avatar AI", en: "Create AI avatars" },
      { vi: "Lồng tiếng", en: "Add voiceovers" },
      { vi: "Tạo phụ đề", en: "Generate subtitles" },
      { vi: "Dịch video", en: "Translate videos" }
    ],
    suggested: ["Veo", "Runway", "Pika", "HeyGen", "CapCut AI"]
  },
  {
    icon: "📚",
    title: { vi: "AI cho Học sinh & Sinh viên", en: "AI for Students" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Giải bài tập", en: "Solve homework" },
      { vi: "Học ngoại ngữ", en: "Learn foreign languages" },
      { vi: "Viết luận", en: "Write essays" },
      { vi: "Tóm tắt sách", en: "Summarize books" },
      { vi: "Lập kế hoạch học tập", en: "Plan study schedules" }
    ],
    suggested: ["ChatGPT", "Gemini", "Perplexity", "Khanmigo", "Quizlet AI"]
  },
  {
    icon: "📈",
    title: { vi: "AI cho Marketing", en: "AI for Marketing" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết bài quảng cáo", en: "Write ad copy" },
      { vi: "Viết content Facebook", en: "Write Facebook content" },
      { vi: "SEO", en: "Optimize SEO" },
      { vi: "Email Marketing", en: "Run email marketing" },
      { vi: "Phân tích khách hàng", en: "Analyze customers" }
    ],
    suggested: ["ChatGPT", "Jasper", "Copy.ai", "Claude", "Canva AI"]
  },
  {
    icon: "💰",
    title: { vi: "AI cho Kinh doanh", en: "AI for Business" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Phân tích dữ liệu", en: "Analyze data" },
      { vi: "Dự báo doanh thu", en: "Forecast revenue" },
      { vi: "Chăm sóc khách hàng", en: "Support customers" },
      { vi: "Chatbot bán hàng", en: "Run sales chatbots" },
      { vi: "Viết mô tả sản phẩm", en: "Write product descriptions" }
    ],
    suggested: ["ChatGPT", "Claude", "Gemini", "HubSpot AI", "Salesforce Einstein"]
  },
  {
    icon: "📱",
    title: { vi: "AI cho Nhà sáng tạo nội dung", en: "AI for Content Creators" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết kịch bản", en: "Write scripts" },
      { vi: "Lên ý tưởng video", en: "Brainstorm video ideas" },
      { vi: "Tạo thumbnail", en: "Create thumbnails" },
      { vi: "Viết tiêu đề hấp dẫn", en: "Write catchy titles" },
      { vi: "Tạo giọng đọc AI", en: "Generate AI voiceovers" }
    ],
    suggested: ["ChatGPT", "Claude", "Veo", "ElevenLabs", "Canva AI"]
  }
];
