import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 中文翻译
const zhResources = {
  translation: {
    name: "Claire Chen",
    title: "前端开发工程师",
    subtitle: "八年前端开发经验，熟悉React、Vue；四年React Native开发经验，四年PC & 移动端页面开发经验，两年在日经验，能独立开发app和web项目。",
    about: {
      title: "关于我",
      content: "我是一名拥有八年丰富经验的前端开发工程师，专注于React、Vue等现代前端框架，具备四年React Native开发经验。能够独立开发app和web项目，熟悉PC端和移动端页面开发。拥有两年在日经验，目前在日本东京工作，具备N2日语水平。",
      cards: {
        react: {
          title: "React & Vue",
          content: "熟悉React和Vue框架，开发现代Web应用程序"
        },
        reactNative: {
          title: "React Native",
          content: "4年以上移动应用开发经验"
        },
        japanese: {
          title: "日语N2",
          content: "目前在日本东京工作"
        },
        japanExperience: {
          title: "在日工作经验",
          content: "2年日本工作经验"
        }
      }
    },
    skills: {
      title: "技能专长",
      frontend: "前端技术",
      backend: "后端技术",
      tools: "开发工具",
      frontendSkills: ["JavaScript", "HTML", "React", "Vue", "React Native", "小程序", "Cordova", "TypeScript"],
      backendSkills: ["Node.js", "Python", "Firebase", "AWS", "REST API", "API文档编写"],
      toolSkills: ["Git", "Taro", "Echarts", "Three.js", "jQuery", "Less", "Umi框架"]
    },
    experience: {
      title: "工作经历",
      company1: {
        name: "MCT JAPAN株式会社",
        position: "全栈工程师",
        period: "2023.10 - 至今",
        description: "全栈负责人，参与人员招聘任用；开发物流中心自动化仓库PDA应用；保险项目基于Vue的SPA开发；短视频app开发（React Native）；二手奢侈品app后台管理画面开发（AI敏捷开发）。"
      },
      company2: {
        name: "中化石化销售有限公司",
        position: "前端工程师",
        period: "2019.8 - 2023.8",
        description: "物流app开发（React Native），为内部销售业务员提供服务；Tob端小程序开发（Taro + React）；物流地图大屏软件开发（Vue + Echarts）。"
      },
      company3: {
        name: "中科软科技股份有限公司",
        position: "前端工程师",
        period: "2017.7 - 2019.8",
        description: "Hybrid应用开发，熟悉JS与各端交互；Cordova + Vue 混合开发；React Native app开发。"
      },
    },
    education: {
      title: "教育背景",
      degree: "海洋技术学士",
      university: "上海海洋大学",
      period: "2013.9 - 2017.7",
      notes: "双一流大学；课程包括 C++、数据结构、数据库、数字图像处理等。"
    },
    contact: {
      title: "联系方式",
      phone: "电话",
      email: "邮箱",
      location: "位置",
      phoneChina: "中国电话",
      phoneJapan: "日本电话",
      locationValue: "东京"
    },
    languages: {
      title: "语言能力",
      japanese: "日语 N2",
      english: "Duolingo 110分"
    },
    jobIntention: {
      title: "求职意向",
      position: "全栈工程师・前端工程师",
      salary: "面议",
      status: "在职找工作 - 1个月内到岗"
    },
    download: "下载简历",
    language: "语言",
    nav: {
      about: "关于我",
      skills: "技能",
      experience: "经历",
      projects: "项目经验",
      contact: "联系"
    },
    footer: {
      text: "感谢您访问我的个人简历网站。如果您有任何问题或合作意向，请随时与我联系。"
    },
    projects: {
      title: "项目经验",
      project1:  {
        name: "二手奢侈品app运营管理系统",
        period: "2025.5 - 现在",
        techStack: ["React", "TypeScript", "Firebase"],
        details: {
          0: "React和TypeScript敏捷开发，一个半月上线",
          1: "从企划・设计到开发、测试全程负责",
          2: "积极活用AI进行开发。"
        }
      },
      project2:{
        name: "短视频app开发",
        period: "2024.5 - 2025.5",
        techStack: ["React Native", "TypeScript", "React", "Node.js"],
        details: {
          0: "前端（React Native）和后端（Node.js）的全栈开发。",
          1: "负责详细设计书以及内部设计书的部分制作。",
        }
      },
      project3: {
        name: "一日保险页面开发",
        period: "2023.11 - 2024.4",
        techStack: ["Vue", "JavaScript", "jQuery", "AWS", "Python"],
        details: {
          0: "本地多服务开发，涉及数据库和Python脚本",
          1: "IE11兼容性处理（jQuery）",
          2: "AWS代码管理"
        }
      },
      project4: {
        name: "宇舍科技网格化管理平台",
        period: "2023.1 - 2023.5",
        techStack: ["React", "TypeScript", "React Hooks", "Less", "Echart", "Three.js"],
        details: {
          0: "基于Umi框架的宿舍管理后台开发",
          1: "Three.js生成3D模型，Echart可视化展示"
        }
      },
      project5: {
        name: "化学品销售企业内部销售业务员业务app",
        period: "2019.8 - 2023.7",
        techStack: ["React Native"],
        details: {
          0: "销售/采购业务app开发",
          1: "支持推送、指纹/手势解锁"
        }
      },
      project6: {
        name: "物流大屏项目",
        period: "2022.8 - 2023.7",
        techStack: ["Vue", "Echarts"],
        details: {
          0: "大屏实时展示中国销售情况",
          1: "地图、运输路线、仓库散点图可视化"
        }
      }
    }
  }
};

// 英文翻译
const enResources = {
  translation: {
    name: "Claire Chen",
    title: "Frontend Developer",
    subtitle: "8 years of frontend development experience, familiar with React and Vue; 4 years of React Native development experience, 4 years of PC & mobile page development experience, 2 years of work experience in Japan, capable of independently developing apps and web projects.",
    about: {
      title: "About Me",
      content: "I am a frontend developer with 8 years of rich experience, specializing in modern frontend frameworks like React and Vue, with 4 years of React Native development experience. Capable of independently developing apps and web projects, familiar with PC and mobile page development. With 2 years of work experience in Japan, currently working in Tokyo with N2 Japanese proficiency.",
      cards: {
        react: {
          title: "React & Vue",
          content: "Familiar with React and Vue frameworks for modern web applications"
        },
        reactNative: {
          title: "React Native",
          content: "4+ years of mobile app development experience"
        },
        japanese: {
          title: "Japanese N2",
          content: "Currently working in Tokyo, Japan"
        },
        japanExperience: {
          title: "Japan Experience",
          content: "2 years of work experience in Japan"
        }
      }
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      frontendSkills: ["JavaScript", "HTML", "React", "Vue", "React Native", "Mini Program", "Cordova", "TypeScript"],
      backendSkills: ["Node.js", "Python", "Firebase", "AWS", "REST API", "API Documentation"],
      toolSkills: ["Git", "Taro", "Echarts", "Three.js", "jQuery", "Less", "Umi Framework"]
    },
    experience: {
      title: "Experience",
      company1: {
        name: "MCT JAPAN Co., Ltd.",
        position: "Full Stack Engineer",
        period: "2023.10 - Present",
        description: "Full stack team lead, involved in recruitment; Developed PDA applications for automated warehouse logistics center; Insurance project SPA development based on Vue; Short video app development (React Native); Second-hand luxury goods app backend management development (AI agile development)."
      },
      company2: {
        name: "Sinochem Petrochemical Sales Co., Ltd.",
        position: "Frontend Engineer",
        period: "2019.8 - 2023.8",
        description: "Logistics app development (React Native) for internal sales staff; ToB mini-program development (Taro + React); Logistics map dashboard software development (Vue + Echarts)."
      },
      company3: {
        name: "Sinosoft Technology Co., Ltd.",
        position: "Frontend Engineer",
        period: "2017.7 - 2019.8",
        description: "Hybrid app development, familiar with JS interaction with various platforms; Cordova + Vue hybrid development; React Native app development."
      },
    },
    education: {
      title: "Education",
      degree: "Bachelor of Marine Technology",
      university: "Shanghai Ocean University",
      period: "2013.9 - 2017.7",
      notes: "Courses include C++, Data Structures, Database, Digital Image Processing, etc."
    },
    contact: {
      title: "Contact",
      phone: "Phone",
      email: "Email",
      location: "Location",
      phoneChina: "China Phone",
      phoneJapan: "Japan Phone",
      locationValue: "Tokyo"
    },
    languages: {
      title: "Language Skills",
      japanese: "Japanese N2",
      english: "Duolingo 110"
    },
    jobIntention: {
      title: "Job Intention",
      position: "Full Stack Engineer・Frontend Engineer",
      salary: "Negotiable",
      status: "Currently employed, available within 1 month"
    },
    download: "Download Resume",
    language: "Language",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Project Experience",
      contact: "Contact"
    },
    footer: {
      text: "Thank you for visiting my personal resume website. If you have any questions or collaboration intentions, please feel free to contact me."
    },
    projects: {
      title: "Project Experience",
      project1: {
        name: "Second-hand Luxury Goods App Operation Management System",
        period: "2025.5 - Present",
        techStack: ["React", "TypeScript", "Firebase"],
        details: {
          0: "React and TypeScript agile development, launched in 1.5 months",
          1: "Responsible for planning, design, development, and testing throughout",
          2: "Actively utilized AI in development."
        }
      },
      project2:{
        name: "Short Video App Development",
        period: "2024.5 - 2025.5",
        techStack: ["React Native", "TypeScript", "React", "Node.js"],
        details: {
          0: "Full stack development of frontend (React Native) and backend (Node.js).",
          1: "Responsible for creating detailed design documents and part of internal design documents.",
        }
      } ,
      project3: {
        name: "One-day Insurance Page Development",
        period: "2023.11 - 2024.4",
        techStack: ["Vue", "JavaScript", "jQuery", "AWS", "Python"],
        details: {
          0: "Local multi-service development, involving databases and Python scripts",
          1: "IE11 compatibility handling (jQuery)",
          2: "AWS code management"
        }
      },
      project4: {
        name: "Yushe Technology Grid Management Platform",
        period: "2023.1 - 2023.5",
        techStack: ["React", "TypeScript", "React Hooks", "Less", "Echart", "Three.js"],
        details: {
          0: "Dormitory management backend development based on Umi framework",
          1: "Three.js 3D model generation, Echart visualization"
        }
      },
      project5: {
        name: "Business App for Internal Sales Staff of Chemical Sales Company",
        period: "2019.8 - 2023.7",
        techStack: ["React Native"],
        details: {
          0: "Sales/purchase business app development",
          1: "Support push notifications, fingerprint/gesture unlock"
        }
      },
      project6: {
        name: "Logistics Dashboard Project",
        period: "2022.8 - 2023.7",
        techStack: ["Vue", "Echarts"],
        details: {
          0: "Real-time display of China sales on large screen",
          1: "Map, transportation routes, warehouse scatter plot visualization"
        }
      }
    }
  }
};

// 日文翻译
const jaResources = {
  translation: {
    name: "Claire Chen",
    title: "フロントエンド開発者",
    subtitle: "8年のフロントエンド開発経験、React・Vueに精通；4年のReact Native開発経験、4年のPC・モバイルページ開発経験、2年の日本での勤務経験、アプリとWebプロジェクトの独立開発が可能。",
    about: {
      title: "自己紹介",
      content: "私は8年の豊富な経験を持つフロントエンド開発者で、React・Vueなどのモダンなフロントエンドフレームワークに特化し、4年のReact Native開発経験があります。アプリとWebプロジェクトの独立開発が可能で、PC・モバイルページ開発に精通しています。2年の日本での勤務経験を持ち、現在東京で働いており、日本語N2レベルです。",
      cards: {
        react: {
          title: "React & Vue",
          content: "ReactとVueフレームワークに精通、モダンなWebアプリケーションを開発"
        },
        reactNative: {
          title: "React Native",
          content: "4年以上のモバイルアプリ開発経験"
        },
        japanese: {
          title: "日本語N2",
          content: "現在東京で働いています"
        },
        japanExperience: {
          title: "日本での勤務経験",
          content: "2年の日本での勤務経験"
        }
      }
    },
    skills: {
      title: "スキル",
      frontend: "フロントエンド",
      backend: "バックエンド",
      tools: "ツール",
      frontendSkills: ["JavaScript", "HTML", "React", "Vue", "React Native", "ミニプログラム", "Cordova", "TypeScript"],
      backendSkills: ["Node.js", "Python", "Firebase", "AWS", "REST API", "APIドキュメント"],
      toolSkills: ["Git", "Taro", "Echarts", "Three.js", "jQuery", "Less", "Umiフレームワーク"]
    },
    experience: {
      title: "経験",
      company1: {
        name: "MCT JAPAN株式会社",
        position: "フルスタックエンジニア",
        period: "2023.10 - 現在",
        description: "フルスタック責任者、採用に関与；物流センター自動倉庫PDAアプリケーション開発；保険プロジェクトVueベースSPA開発；ショート動画アプリ開発（React Native）；中古奢侈品アプリバックエンド管理画面開発（AIアジャイル開発）。"
      },
      company2: {
        name: "中化石化販売有限公司",
        position: "フロントエンドエンジニア",
        period: "2019.8 - 2023.8",
        description: "物流アプリ開発（React Native）、内部営業担当者向けサービス；ToBミニプログラム開発（Taro + React）；物流マップダッシュボードソフトウェア開発（Vue + Echarts）。"
      },
      company3: {
        name: "中科軟科技股份有限公司",
        position: "フロントエンドエンジニア",
        period: "2017.7 - 2019.8",
        description: "ハイブリッドアプリ開発、JSと各プラットフォームとの連携に精通；Cordova + Vue ハイブリッド開発；React Nativeアプリ開発。"
      },
    },
    education: {
      title: "学歴",
      degree: "海洋技術学士",
      university: "上海海洋大学",
      period: "2013.9 - 2017.7",
      notes: "中国一流大学；C++、データ構造、データベース、デジタル画像処理などのコース。"
    },
    contact: {
      title: "連絡先",
      phone: "電話",
      email: "メール",
      location: "所在地",
      phoneChina: "中国電話",
      phoneJapan: "日本電話",
      locationValue: "東京"
    },
    languages: {
      title: "言語能力",
      japanese: "日本語 N2",
      english: "Duolingo 110点",
    },
    jobIntention: {
      title: "求職意向",
      position: "フルスタックエンジニア・フロントエンドエンジニア",
      salary: "応相談",
      status: "在職中求職 - 1ヶ月以内に着任可能"
    },
    download: "履歴書をダウンロード",
    language: "言語",
    nav: {
      about: "自己紹介",
      skills: "スキル",
      experience: "経験",
      projects: "プロジェクト経験",
      contact: "連絡先"
    },
    footer: {
      text: "私の個人履歴書サイトをご訪問いただき、ありがとうございます。ご質問や協力のご意向がございましたら、お気軽にお問い合わせください。"
    },
    projects: {
      title: "プロジェクト経験",
      project1:  {
        name: "中古ブランド品アプリ運営管理システム",
        period: "2025.5 - 現在",
        techStack: ["React", "TypeScript", "Firebase"],
        details: {
          0: "reactとTypescriptアジャイル開発、1.5ヶ月でリリース",
          1: "企画・設計から開発、テストまで一貫して担当",
          2: "AI を積極的に活用して開発を行いました。"
        }
      },
      project2:{
        name: "ショート動画アプリ開発",
        period: "2024.5 - 2025.5",
        techStack: ["React Native", "TypeScript", "React", "Node.js"],
        details: {
          0: "フロントエンド（React Native）とバックエンド（Node.js）のフルスタック開発を行いました。",
          1: "詳細設計書および内部設計書の一部作成を担当しました。",
        }
        
      },
      project3: {
        name: "一日保険ページ開発",
        period: "2023.11 - 2024.4",
        techStack: ["Vue", "JavaScript", "jQuery", "AWS", "Python"],
        details: {
          0: "ローカル多サービス開発、データベースとPythonスクリプトを含む",
          1: "IE11互換性処理（jQuery）",
          2: "AWSコード管理"
        }
      },
      project4: {
        name: "宇舍科技グリッド管理プラットフォーム",
        period: "2023.1 - 2023.5",
        techStack: ["React", "TypeScript", "React Hooks", "Less", "Echart", "Three.js"],
        details: {
          0: "Umiフレームワークベースの寮管理バックエンド開発",
          1: "Three.js 3Dモデル生成、Echart可視化"
        }
      },
      project5: {
        name: "化学品販売企業の社内営業担当者向け業務アプリ",
        period: "2019.8 - 2023.7",
        techStack: ["React Native"],
        details: {
          0: "販売/仕入業務アプリ開発",
          1: "プッシュ通知、指紋/ジェスチャーロックをサポート"
        }
      },
      project6: {
        name: "物流ダッシュボードプロジェクト",
        period: "2022.8 - 2023.7",
        techStack: ["Vue", "Echarts"],
        details: {
          0: "大画面での中国販売状況のリアルタイム表示",
          1: "地図、輸送ルート、倉庫散布図の可視化"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: zhResources,
      en: enResources,
      ja: jaResources
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
