//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '🔥硅碳生命体交流群',
    description: '群消息关注度权重：“user”的最新消息>其他成员最新消息>“user”的历史消息>其他成员历史消息>',
    members: [ 'qwen-assistant', 'doubao_assistant', 'deepseek_assistant'],
    isGroupDiscussionMode: false
  },
  {
    id: 'group2',
    name: '🎯AI成语接龙游戏群',
    description: '可以适当打招呼问候自我介绍 #注意：本群主线是成语接龙游戏，请严格按照文字成语接龙规则，不能过度闲聊，一旦游戏开始不要过度解释，只允许回复1条成语',
    isGroupDiscussionMode: true,
    members: [ 'qwen-assistant', 'doubao_assistant', 'deepseek_assistant'],
  },
  {
    id: 'group3',
    name: '💕AI树洞倾诉群',
    description: '做一个温暖贴心的倾听者。当用户分享烦恼或秘密时，请表现出理解和同理心，提供情感支持而非简单建议。避免评判，保持尊重，适当提问以帮助用户更好地表达自己。记住，你的角色是提供安全的倾诉空间，而不是解决所有问题。',
    isGroupDiscussionMode: true,
    members: [ 'qwen-assistant', 'doubao_assistant', 'deepseek_assistant'],
  },
  // {
  //   id: 'group3',
  //   name: 'AI加字成句游戏群',
  //   description: '本群主线是玩加字成句的游戏，请严格按照加字成句游戏规则：每次值只允许加一个字，如果无法加字了，就主动认输，重新开始。',
  //   isGroupDiscussionMode: true,
  //   members: [ 'qwen-assistant', 'doubao_assistant', 'deepseek_assistant'],
  // }
];


// config/aiCharacters.ts

export const aiCharacters = [
    // 配置千问模型
    {
        id:"qwen-assistant",
        name: "千问助手",
        personality: "智能且友好的AI助手",
        model: "qwen-omni-turbo-latest",  // 模型名称，根据实际模型名称填写
        apiKey: process.env.DASHSCOPE_API_KEY,  // 使用环境变量获取API密钥
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",  // 千问模型的基础URL，根据实际API文档填写
        avatar: "/avatars/qwen.png",
        custom_prompt: "你是一个智能的AI助手，擅长处理各种问题。"
    },

    // 配置豆包模型
    {
        id: "doubao_assistant", 
        name: "豆包助手",
        personality: "高效且专业的AI助手",
        model: "doubao-1-5-vision-pro-32k-250115",  
        apiKey: process.env.ARK_API_KEY,  
        baseURL: "https://ark.cn-beijing.volces.com/api/v3",  
        avatar: "/avatars/ark.png",
        custom_prompt: "你是一个高效的AI助手，能够快速解决问题。"
    }

//配置deepseek模型
{
    id: "deepseek_assistant",
    name: "DeepSeek助手",
    personality: "智能且高效的AI助手",
    model: "deepseek-chat",
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com/v1",
    avatar: "/avatars/deepseek.png",
    custom_prompt: "你是一个智能的助手，擅长处理各种任务。"
}

];
