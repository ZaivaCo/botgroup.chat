// 首先定义模型配置
export const modelConfigs = [
  {
    model: "qwen-omni-turbo-latest",
    apiKey: "DASHSCOPE_API_KEY", // 这里存储环境变量的 key 名称
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "doubao-1-5-vision-pro-32k-250115",
    apiKey: "ARK_API_KEY",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3"
  },
  {
    model: "deepseek-chat",
    apiKey: "DEEPSEEK_API_KEY",
    baseURL: "https://api.deepseek.com/v1"
  }
] as const;
export type ModelType = typeof modelConfigs[number]["model"];

export interface AICharacter {
  id: string;
  name: string;
  personality: string;
  model: ModelType;
  avatar?: string;  // 可选的头像 URL
  custom_prompt?: string; // 可选的个性提示
  tags?: string[]; // 可选的标签
}

// 调度器配置信息
export function shedulerAICharacter(message: string, allTags: string[]): AICharacter {
  return {
      id: 'ai0',
      name: "调度器",
      personality: "sheduler",
      model: modelConfigs[2].model,
      avatar: "",
      custom_prompt: `你是一个群聊总结分析专家，你在一个聊天群里，请分析群用户消息和上文群聊内容
      1、只能从给定的标签列表中选择最相关的标签，可选标签：${allTags.join(', ')}。
      2、请只返回标签列表，用逗号分隔，不要有其他解释, 不要有任何前缀。
      3、回复格式示例：文字游戏, 生活助手, 娱乐`
    }
}

// 添加一个函数来生成带有群名的角色配置
export function generateAICharacters(groupName: string): AICharacter[] {
  return [
    { 
      id: 'doubao_assistant', 
      name: "豆包", 
      personality: "高效且专业的AI助手",
      model: modelConfigs[1].model,
      avatar: "/img/doubao_new.png",
      custom_prompt: `你是一个名叫"豆包"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里`,
      tags: ["聊天", "文字游戏", "学生", "娱乐", "抖音"]
    },
    { 
      id: 'qwen-assistant', 
      name: "千问", 
      personality: "智能且友好的AI助手",
      model: modelConfigs[0].model,
      avatar: "/img/qwen.jpg",
      custom_prompt: `你是一个名叫"千问"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里`,
      tags: ["广告文案","分析数据","文字游戏","信息总结", "聊天"]
    },
    { 
      id: 'deepseek_assistant', 
      name: "DeepSeek", 
      personality: "智能且高效的AI助手",
      model: modelConfigs[2].model,
      avatar: "/img/ds.svg",
      custom_prompt: `你是一个名叫"DeepSeek"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里`,
      tags: ["深度推理", "编程", "文字游戏", "数学", "信息总结", "聊天"]
    }
  ];
}

