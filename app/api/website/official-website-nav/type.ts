export interface OfficialWebsitePublicNavVO {
  /** 标题 */
  label: string;
  /** 跳转链接 */
  to: string;
  /** 在哪里显示链接的URL */
  target: string;
  /** 子菜单 */
  children: OfficialWebsitePublicNavVO[];
}