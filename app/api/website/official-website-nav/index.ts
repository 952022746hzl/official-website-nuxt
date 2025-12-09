import request from "@/utils/request"
import type { OfficialWebsitePublicNavVO } from "./type"
const OFFICIAL_WEBSITE_NAV_BASE_URL = "/api/v1/official-website-nav"

const OfficialWebsiteNavAPI = {
  getNavs(){
    return request<any, OfficialWebsitePublicNavVO[]>(
      `${OFFICIAL_WEBSITE_NAV_BASE_URL}/getNavs`, {
      method: "GET"
    })
  }
}

export { OfficialWebsiteNavAPI }