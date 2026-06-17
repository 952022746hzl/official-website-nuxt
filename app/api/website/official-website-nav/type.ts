export interface OfficialWebsitePublicNavVO {
  /** 标题 */
  label: string;
  /** 跳转链接（分组目录 type=3 时后端不返回） */
  to?: string;
  /** 打开方式（外链为 _blank，内部路由/分组目录通常不返回） */
  target?: string;
  /** 子菜单（无子项时后端不返回） */
  children?: OfficialWebsitePublicNavVO[];
}
