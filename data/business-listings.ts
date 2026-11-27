// Structured business directory listings imported from the 24/7 HVAC Local of Long Island spreadsheet.
// SECURITY: Only public directory names and public profile URLs are included. No credentials or account emails are stored.

export type ListingCategory =
  | 'Local & Business Directories'
  | 'Home Services & Contractors'
  | 'Regional & US Directories'
  | 'Social & Content Platforms';

export type VerificationStatus = 'verified' | 'needs_review';

export interface BusinessListing {
  id: number;
  platformName: string;
  profileUrl: string;
  status: string;
  category: ListingCategory;
  logo?: string;
  verificationStatus: VerificationStatus;
  isDuplicateUrl: boolean;
  auditNote?: string;
}

export const LISTING_CATEGORIES: ListingCategory[] = [
  'Local & Business Directories',
  'Regional & US Directories',
  'Home Services & Contractors',
  'Social & Content Platforms',
];

export const LISTING_AUDIT_SUMMARY = {
  totalSpreadsheetRecords: 205,
  publishedDirectoryRecords: 198,
  flaggedForManualReview: 7,
  duplicateUrlRecords: 2,
} as const;

export const ALL_BUSINESS_LISTINGS: BusinessListing[] = [
  {
    "id": 1,
    "platformName": "bbb.org",
    "profileUrl": "https://flm.by/se2tChR5pYt",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Uses URL shortener (flm.by) instead of direct bbb.org profile URL"
  },
  {
    "id": 2,
    "platformName": "us.enrollbusiness.com",
    "profileUrl": "https://us.enrollbusiness.com/BusinessProfile/8010225/HVAC%20LOCAL%20OF%20LONG%20ISLAND",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 3,
    "platformName": "zipleaf.us",
    "profileUrl": "https://www.zipleaf.us/Companies/247-HVAC-LOCAL-OF-LONG-ISLAND-516-717-7515",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 4,
    "platformName": "merchantcircle.com",
    "profileUrl": "https://www.merchantcircle.com/2A4-7-hvac-lawrence-ny",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 5,
    "platformName": "n49.com",
    "profileUrl": "https://sites.google.com/view/hvac-local-of-long-island/home",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Domain mismatch: platform is n49.com but URL points to sites.google.com"
  },
  {
    "id": 6,
    "platformName": "sites.google.com",
    "profileUrl": "https://www.n49.com/biz/7489705/24-7-hvac-local-of-long-island-new-york-lawrence-700-rockaway-turnpike-400/",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Domain mismatch: platform is sites.google.com but URL points to n49.com"
  },
  {
    "id": 7,
    "platformName": "bizhwy.com",
    "profileUrl": "https://new-york.bizhwy.com/247-hvac-local-of-long-island-id62457.php",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 8,
    "platformName": "Find-us-here.com",
    "profileUrl": "https://www.find-us-here.com/businesses/24-7-HVAC-LOCAL-OF-LONG-ISLAND-Lawrence-New-York-USA/34640066/",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 9,
    "platformName": "Place123.net",
    "profileUrl": "http://www.place123.net/place/24-7-hvac-local-of-long-island-lawrence-new-york-usa",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 10,
    "platformName": "yplocal.com",
    "profileUrl": "https://www.yplocal.com/700-rockaway-turnpike-400-lawrence-new-york-11559/business-professional-services/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 11,
    "platformName": "localhomeservicepros.com",
    "profileUrl": "https://www.localhomeservicepros.com/700-rockaway-turnpike-400-lawrence-new-york-11559/electrical/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 12,
    "platformName": "Freelistingusa.com",
    "profileUrl": "https://www.freelistingusa.com/listings/247-hvac-local-of-long-island-1",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 13,
    "platformName": "A-zbusinessfinder.com",
    "profileUrl": "https://www.a-zbusinessfinder.com/business-directory/24-7-HVAC-LOCAL-OF-LONG-ISLAND-Lawrence-New-York-USA/34640066/",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 14,
    "platformName": "Smallbusinessusa.com",
    "profileUrl": "https://smallbusinessusa.com/listing/247-hvac-local-of-long-island-6ad497b0b3232.html",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 15,
    "platformName": "Iformative.com",
    "profileUrl": "https://www.iformative.com/product/24477-hvac-local-of-long-island-p3173158.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 16,
    "platformName": "issuu.com",
    "profileUrl": "https://issuu.com/247hvaclongisland12?ps=24",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 17,
    "platformName": "speakerdeck.com",
    "profileUrl": "https://speakerdeck.com/247hvaclongisland",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 18,
    "platformName": "seo-citations.com",
    "profileUrl": "https://www.seo-citations.com/c/ea15fgro4dkb/hvac-contractors/lawrence-new-york/247-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 19,
    "platformName": "tripadvisor.com",
    "profileUrl": "https://www.tripadvisor.com/Profile/hvaclocaloflongi",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 20,
    "platformName": "zeemaps.com",
    "profileUrl": "https://www.zeemaps.com/map/orywo?group=7188520",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 21,
    "platformName": "CitySquares.com",
    "profileUrl": "https://flm.by/se2A3PlBJiX",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Uses URL shortener (flm.by) instead of direct CitySquares.com profile URL"
  },
  {
    "id": 22,
    "platformName": "CityLocalPro.com",
    "profileUrl": "https://flm.by/se2ZcarpVed",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Uses URL shortener (flm.by) instead of direct CityLocalPro.com profile URL"
  },
  {
    "id": 23,
    "platformName": "ContractorsAndSuppliers.com",
    "profileUrl": "https://www.contractorsandsuppliers.com/700-rockaway-turnpike-400-lawrence-new-york-11559/commercial-contractors/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 24,
    "platformName": "USAHomePlus.com",
    "profileUrl": "https://www.usahomeplus.com/700-rockaway-turnpike-400-lawrence-new-york-11559/hvac-contractors/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 25,
    "platformName": "telegra.ph",
    "profileUrl": "https://telegra.ph/247-HVAC-LOCAL-OF-LONG-ISLAND-10-18",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 26,
    "platformName": "justpaste.it",
    "profileUrl": "https://justpaste.it/if26n",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 27,
    "platformName": "4shared.com",
    "profileUrl": "https://www.4shared.com/u/Hzr_89Wh/247hvaclongisland.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 28,
    "platformName": "getlisteduae.com",
    "profileUrl": "https://www.getlisteduae.com/listings/247-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 29,
    "platformName": "Postingzz.com",
    "profileUrl": "https://postingzz.com/directory/24-7-hvac-local-of-long-island-profile-95021.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 30,
    "platformName": "Productzz.com",
    "profileUrl": "https://productzz.com/directory/24-7-hvac-local-of-long-island-profile-83823.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 31,
    "platformName": "supplyautonomy.com",
    "profileUrl": "https://supplyautonomy.com/247hvaclocaloflongisland1.us",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 32,
    "platformName": "expatriates.com",
    "profileUrl": "https://www.expatriates.com/cls/64488370.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 33,
    "platformName": "linkcentre.com",
    "profileUrl": "https://www.linkcentre.com/profile/247hvaclongisland12/",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 34,
    "platformName": "ted.com",
    "profileUrl": "https://www.ted.com/profiles/52325323",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 35,
    "platformName": "pastelink.net",
    "profileUrl": "https://pastelink.net/ugbe1t5t",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 36,
    "platformName": "skillshare.com",
    "profileUrl": "https://www.skillshare.com/en/profile/Skillshare%20Member-/937704808",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 37,
    "platformName": "cally.com",
    "profileUrl": "https://cally.com/event/availability/psxqp9mkazrxjhqn",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 38,
    "platformName": "pearltrees.com",
    "profileUrl": "https://www.pearltrees.com/247hvaclongisland/item832886559",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 39,
    "platformName": "buynow-us.com",
    "profileUrl": "https://www.buynow-us.com/details.php?id=852382&key=d41f1219f92f6acfec9f3d897b6f8b0e",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 40,
    "platformName": "startupxplore.com",
    "profileUrl": "https://startupxplore.com/en/person/24-7-hvac-local-of-long-island-1",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 41,
    "platformName": "dreevoo.com",
    "profileUrl": "https://dreevoo.com/profile_info.php?pid=2555015",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 42,
    "platformName": "mapfling.com",
    "profileUrl": "https://mapfling.com/q3pxida",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 43,
    "platformName": "n2local.com",
    "profileUrl": "https://www.n2local.com/us/ny/lawrence/local/business+opportunity/202610180413558q7fUs6soTO",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 44,
    "platformName": "classifiedads.com",
    "profileUrl": "https://www.classifiedads.com/business_opportunities/w96wm3d043df6",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 45,
    "platformName": "penzu.com",
    "profileUrl": "https://penzu.com/public/dda5184bd676d1ec",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 46,
    "platformName": "gravatar.com",
    "profileUrl": "https://gravatar.com/starlightsecretly1c38d45878",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 47,
    "platformName": "quora.com",
    "profileUrl": "https://www.quora.com/profile/HVAC-LOCAL-OF-LONG-ISLAND",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 48,
    "platformName": "medium.com",
    "profileUrl": "https://medium.com/@247hvaclongisland_46233/24-7-hvac-local-of-long-island-5f2dc64a911c?postPublishedType=initial",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 49,
    "platformName": "livejournal.com",
    "profileUrl": "https://247hvaclongisla.livejournal.com/404.html?newpost=1",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 50,
    "platformName": "batchgeo.com",
    "profileUrl": "https://batchgeo.com/map/56c668643f79aa4469aadd01b20f2143",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 51,
    "platformName": "unsplash.com",
    "profileUrl": "https://unsplash.com/@247hvaclongisland",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 52,
    "platformName": "scribblemaps.com",
    "profileUrl": "https://www.scribblemaps.com/maps/view/247-HVAC-LOCAL-OF-LONG-ISLAND/EwxPTCroNT?t=1792379904752",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 53,
    "platformName": "zazzle.co",
    "profileUrl": "https://www.zazzle.com/mbr/238563689828822307",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 54,
    "platformName": "Icare211.Com",
    "profileUrl": "http://www.icare211.com/Directory/247-hvac-local-of-long-island-profile-101458.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 55,
    "platformName": "ikeanded.com",
    "profileUrl": "https://www.ikeanded.com/directory/24-7-hvac-local-of-long-island-profile-222012.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 56,
    "platformName": "blogger.com",
    "profileUrl": "https://processserver12.blogspot.com/2026/10/247-hvac-local-of-long-island.html",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": false,
    "auditNote": "Domain mismatch: platform is blogger.com but URL points to processserver12.blogspot.com"
  },
  {
    "id": 57,
    "platformName": "igotbiz.com",
    "profileUrl": "https://www.igotbiz.com/directory/247-hvac-local-of-long-island-profile-438683.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 58,
    "platformName": "Bizmaker.org",
    "profileUrl": "https://www.bizmaker.org/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 59,
    "platformName": "Choice.Directory",
    "profileUrl": "https://www.choice.directory/700-rockaway-turnpike-400-lawrence-new-york-11559/business-networking-online/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 60,
    "platformName": "500px.Com",
    "profileUrl": "https://500px.com/p/247hvaclongisland",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 61,
    "platformName": "surfyourtown.com",
    "profileUrl": "https://www.surfyourtown.com/united-states/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 62,
    "platformName": "lodgingowners.com",
    "profileUrl": "https://www.lodgingowners.com/articles/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 63,
    "platformName": "hastebin.com",
    "profileUrl": "https://hastebin.com/share/goboxukoqu.yaml",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 64,
    "platformName": "detroitbusinesscenter.com",
    "profileUrl": "http://www.detroitbusinesscenter.com/700-rockaway-turnpike-400-lawrence-new-york-11559/services/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 65,
    "platformName": "paste2.org",
    "profileUrl": "https://paste2.org/L6cMxnA1",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 66,
    "platformName": "ehbact.com",
    "profileUrl": "https://www.ehbact.com/700-rockaway-turnpike-400-lawrence-new-york-11559/home-garden/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 67,
    "platformName": "htownads.com",
    "profileUrl": "https://www.htownads.com/700-rockaway-turnpike-400-lawrence-new-york-11559/business-professional-services/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 68,
    "platformName": "nethalal.com",
    "profileUrl": "https://www.nethalal.com/24-7-hvac-local-of-long-island/serving-the-halal-industry/700-rockaway-turnpike-400-lawrence-new-york-11559",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 69,
    "platformName": "caribconec.com",
    "profileUrl": "https://www.caribconec.com/articles/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 70,
    "platformName": "easytherapy.ai",
    "profileUrl": "http://www.easytherapy.ai/blog/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 71,
    "platformName": "discover247.directoryup.com",
    "profileUrl": "http://discover247.directoryup.com/700-rockaway-turnpike-400-lawrence-new-york-11559/professional-services/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 72,
    "platformName": "helpsellmyfsbo.com",
    "profileUrl": "https://helpsellmyfsbo.com/blog/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 73,
    "platformName": "padzee.com",
    "profileUrl": "https://padzee.com/247HVACLOCALOFLONGISLAND",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 74,
    "platformName": "BigBizStuff.com",
    "profileUrl": "https://www.bigbizstuff.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 75,
    "platformName": "Biz411.org",
    "profileUrl": "https://www.biz411.org/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 76,
    "platformName": "bizlinkbuilder.com",
    "profileUrl": "https://www.bizlinkbuilder.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 77,
    "platformName": "SelfEmployedAI.com",
    "profileUrl": "https://www.selfemployedai.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 78,
    "platformName": "SmallBizBlog.net",
    "profileUrl": "https://www.smallbizblog.net/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 79,
    "platformName": "bigbizmaker.com",
    "profileUrl": "https://www.bigbizmaker.com/united-states/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 80,
    "platformName": "nextbizmaker.com",
    "profileUrl": "https://www.nextbizmaker.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 81,
    "platformName": "nextbizthing.com",
    "profileUrl": "https://www.nextbizthing.com/700-rockaway-turnpike-400-lawrence-new-york-11559/home-20-garden/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 82,
    "platformName": "pinterest.com",
    "profileUrl": "https://www.pinterest.com/247hvaclongisland/_profile/",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 83,
    "platformName": "ctxt.io",
    "profileUrl": "https://ctxt.io/3/lX1CyOsFi",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 84,
    "platformName": "writexo.com",
    "profileUrl": "https://writexo.com/share/cbf5ae598f76",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 85,
    "platformName": "pastie.org",
    "profileUrl": "http://pastie.org/p/0Zw76YVq7CmlbAN9ugpXNl",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 86,
    "platformName": "rentry.co",
    "profileUrl": "https://rentry.co/gpdswfrn",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 87,
    "platformName": "ultimate-guitar.com",
    "profileUrl": "https://www.ultimate-guitar.com/u/hvac1223",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 88,
    "platformName": "zumvu.com",
    "profileUrl": "https://zumvu.com/247hvaclongislandcom/",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 89,
    "platformName": "smartseolink.org",
    "profileUrl": "https://smartseolink.org/details.php?id=453951",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 90,
    "platformName": "link-boy.org",
    "profileUrl": "https://link-boy.org/details.php?id=378376",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 91,
    "platformName": "Statezz.com",
    "profileUrl": "https://statezz.com/directory/24-7-hvac-local-of-long-island-profile-56567.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 92,
    "platformName": "USAizze.com",
    "profileUrl": "https://usaizze.com/directory/24-7-hvac-local-of-long-island-profile-62053.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 93,
    "platformName": "localpromoted.com",
    "profileUrl": "https://localpromoted.com/directory/24-7-hvac-local-of-long-island-profile-115895.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 94,
    "platformName": "localfeatured.com",
    "profileUrl": "https://www.localfeatured.com/directory/24-7-hvac-local-of-long-island-profile-149368.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 95,
    "platformName": "localdisplayed.com",
    "profileUrl": "https://localdisplayed.com/directory/24-7-hvac-local-of-long-island-profile-99030.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 96,
    "platformName": "HomePros411.com",
    "profileUrl": "https://www.homepros411.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 97,
    "platformName": "addirectory.org",
    "profileUrl": "https://addirectory.org/details.php?id=475317",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 98,
    "platformName": "freeseolink.org",
    "profileUrl": "https://freeseolink.org/24/7-HVAC-LOCAL-OF-LONG-ISLAND_420301.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 99,
    "platformName": "familydir.com",
    "profileUrl": "https://familydir.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_548915.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 100,
    "platformName": "linkmate.mn.co",
    "profileUrl": "https://linkmate.mn.co/members/42292680",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 101,
    "platformName": "professionalzz.com",
    "profileUrl": "https://professionalzz.com/directory/700-rockaway-turnpike-400-lawrencenew-york11559-profile-92740.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 102,
    "platformName": "northland101.com",
    "profileUrl": "https://northland101.com/directory/24-7-hvac-local-of-long-island-profile-95199.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 103,
    "platformName": "nationpromoted.com",
    "profileUrl": "https://nationpromoted.com/directory/24-7-hvac-local-of-long-island-profile-86374.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 104,
    "platformName": "BusinessesFeatured.com",
    "profileUrl": "https://businessesfeatured.com/directory/24-7-hvac-local-of-long-island-profile-69880.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 105,
    "platformName": "BusinessesListed.com",
    "profileUrl": "https://businesseslisted.com/directory/24-7-hvac-local-of-long-island-profile-73282.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 106,
    "platformName": "localzz360.com",
    "profileUrl": "https://www.localzz360.com/directory/247-hvac-local-of-long-island-profile-109012.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 107,
    "platformName": "localzzhq.com",
    "profileUrl": "https://localzzhq.com/directory/24-7-hvac-local-of-long-island-profile-118243.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 108,
    "platformName": "localzz101.com",
    "profileUrl": "https://localzz101.com/directory/24-7-hvac-local-of-long-island-profile-99200.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 109,
    "platformName": "BusinessesPosted.com",
    "profileUrl": "https://businessesposted.com/directory/24-7-hvac-local-of-long-island-profile-50205.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 110,
    "platformName": "BusinessesPromoted.com",
    "profileUrl": "https://businessespromoted.com/directory/24-7-hvac-local-of-long-island-profile-46381.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 111,
    "platformName": "nova-driving-school.mn.co",
    "profileUrl": "https://nova-driving-school.mn.co/members/42292854",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 112,
    "platformName": "Businessizze.com",
    "profileUrl": "https://businessizze.com/directory/24-7-hvac-local-of-long-island-profile-88281.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 113,
    "platformName": "Citiezz.com",
    "profileUrl": "https://citiezz.com/directory/24-7-hvac-local-of-long-island-profile-86087.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 114,
    "platformName": "freesaloneducation.mn.co",
    "profileUrl": "https://freesaloneducation.mn.co/members/42292863",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 115,
    "platformName": "justlink.org",
    "profileUrl": "https://justlink.org/details.php?id=438699",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 116,
    "platformName": "beegdirectory.com",
    "profileUrl": "https://beegdirectory.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_487391.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 117,
    "platformName": "timeblog.net",
    "profileUrl": "https://247hvaclongisland.timeblog.net/79431097/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 118,
    "platformName": "freeweblink.org",
    "profileUrl": "https://freeweblink.org/details.php?id=335986",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 119,
    "platformName": "free-weblink.com",
    "profileUrl": "https://free-weblink.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_297900.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 120,
    "platformName": "link-man.org",
    "profileUrl": "https://link-man.org/24/7-HVAC-LOCAL-OF-LONG-ISLAND_418677.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 121,
    "platformName": "directorydirect.net",
    "profileUrl": "https://directorydirect.net/24/7-HVAC-LOCAL-OF-LONG-ISLAND_402766.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 122,
    "platformName": "ad-links.org",
    "profileUrl": "https://ad-links.org/https://247hvaclongislandcom/_392106.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 123,
    "platformName": "phat4life.mn.co",
    "profileUrl": "https://phat4life.mn.co/members/42293950",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 124,
    "platformName": "friendtalk.mn.co",
    "profileUrl": "https://friendtalk.mn.co/members/42293982",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 125,
    "platformName": "businessboostier.mn.co",
    "profileUrl": "https://businessboostier.mn.co/members/42294000",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 126,
    "platformName": "bpa-mastery.mn.co",
    "profileUrl": "https://bpa-mastery.mn.co/members/42294001",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 127,
    "platformName": "ripple-xrp-global-network.mn.co",
    "profileUrl": "https://ripple-xrp-global-network.mn.co/members/42294018",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 128,
    "platformName": "clicksordirectory.com",
    "profileUrl": "https://clicksordirectory.com/details.php?id=495959",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 129,
    "platformName": "aquarius-dir.com",
    "profileUrl": "https://aquarius-dir.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_539885.html",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 130,
    "platformName": "ebay-dir.com",
    "profileUrl": "https://ebay-dir.com/listing/247-hvac-local-of-long-island-463577",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 131,
    "platformName": "ask-dir.org",
    "profileUrl": "https://ask-dir.org/24/7-HVAC-LOCAL-OF-LONG-ISLAND_400343.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 132,
    "platformName": "addgoodsites.com",
    "profileUrl": "https://addgoodsites.com/details.php?id=769589",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 133,
    "platformName": "adbritedirectory.com",
    "profileUrl": "http://adbritedirectory.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_710016.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 134,
    "platformName": "cityadvertised.com",
    "profileUrl": "https://cityadvertised.com/directory/24-7-hvac-local-of-long-island-profile-89584.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 135,
    "platformName": "citycategories.com",
    "profileUrl": "https://citycategories.com/directory/24-7-hvac-local-of-long-island-profile-75458.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 136,
    "platformName": "AdvertisingCEO.com",
    "profileUrl": "https://advertisingceo.com/directory/24-7-hvac-local-of-long-island-profile-81165.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 137,
    "platformName": "businessstorefronts.com",
    "profileUrl": "https://businessstorefronts.com/directory/24-7-hvac-local-of-long-island-profile-38455.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 138,
    "platformName": "businessezz.com",
    "profileUrl": "https://businessezz.com/directory/24-7-hvac-local-of-long-island-profile-138497.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 139,
    "platformName": "cityizze.com",
    "profileUrl": "https://cityizze.com/directory/24-7-hvac-local-of-long-island-profile-63016.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 140,
    "platformName": "citypromoted.com",
    "profileUrl": "https://citypromoted.com/directory/24-7-hvac-local-of-long-island-profile-78094.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 141,
    "platformName": "communitiezz.com",
    "profileUrl": "https://communitiezz.com/directory/24-7-hvac-local-of-long-island-profile-104452.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 142,
    "platformName": "jet-links.com",
    "profileUrl": "https://jet-links.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_417776.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 143,
    "platformName": "backpagedir.com",
    "profileUrl": "https://backpagedir.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_473084.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 144,
    "platformName": "reddit-directory.com",
    "profileUrl": "https://reddit-directory.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_708357.html",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 145,
    "platformName": "ecobluedirectory.com",
    "profileUrl": "https://ecobluedirectory.com/gosearch.php?q=24%2F7+HVAC+LOCAL+OF+LONG+ISLAND&search-btn.x=0&search-btn.y=0",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 146,
    "platformName": "expansiondirectory.com",
    "profileUrl": "https://expansiondirectory.com/gosearch.php?q=24%2F7+HVAC+LOCAL+OF+LONG+ISLAND",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 147,
    "platformName": "fruity-directory.com",
    "profileUrl": "https://fruity-directory.com/gosearch.php?q=24%2F7+HVAC+LOCAL+OF+LONG+ISLAND&x=19&y=18",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 148,
    "platformName": "greenydirectory.com",
    "profileUrl": "https://greenydirectory.com/index.php?q=24%2F7+HVAC+LOCAL+OF+LONG+ISLAND",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 149,
    "platformName": "groovy-directory.com",
    "profileUrl": "https://groovy-directory.com/gosearch.php?q=24%2F7+HVAC+LOCAL+OF+LONG+ISLAND&search-btn.x=11&search-btn.y=10",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 150,
    "platformName": "SmallBizAmerica.org",
    "profileUrl": "https://www.smallbizamerica.org/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 151,
    "platformName": "jasa-seo.mn.co",
    "profileUrl": "https://jasa-seo.mn.co/members/42294967",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 152,
    "platformName": "janjaonline.mn.co",
    "profileUrl": "https://janjaonline.mn.co/members/42294976",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 153,
    "platformName": "pvd-psycho.mn.co",
    "profileUrl": "https://pvd-psycho.mn.co/members/42294982",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 154,
    "platformName": "calisthenics.mn.co",
    "profileUrl": "https://calisthenics.mn.co/members/42294985",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 155,
    "platformName": "faceout.mn.co",
    "profileUrl": "https://faceout.mn.co/members/42294992",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 156,
    "platformName": "stagejobs.mn.co",
    "profileUrl": "https://stagejobs.mn.co/members/42294995",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 157,
    "platformName": "autismsupport.mn.co",
    "profileUrl": "https://autismsupport.mn.co/members/42294998",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 158,
    "platformName": "regenerative-orthopedics-and-sports-medi.mn.co",
    "profileUrl": "https://regenerative-orthopedics-and-sports-medi.mn.co/members/42295001",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 159,
    "platformName": "localcategories.com",
    "profileUrl": "https://localcategories.com/directory/24-7-hvac-local-of-long-island-profile-83259.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 160,
    "platformName": "localbundled.com",
    "profileUrl": "https://localbundled.com/directory/24-7-hvac-local-of-long-island-profile-109931.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 161,
    "platformName": "AmericaSmallBiz.com",
    "profileUrl": "https://www.americasmallbiz.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 162,
    "platformName": "vendorsinsight.com",
    "profileUrl": "http://www.vendorsinsight.com/700-rockaway-turnpike-400-lawrence-new-york-11559/office-manager/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 163,
    "platformName": "localbrowsed.com",
    "profileUrl": "https://localbrowsed.com/directory/24-7-hvac-local-of-long-island-profile-103324.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 164,
    "platformName": "localadvertised.com",
    "profileUrl": "https://localadvertised.com/directory/24-7-hvac-local-of-long-island-profile-117514.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 165,
    "platformName": "listingzz.com",
    "profileUrl": "https://listingzz.com/directory/24-7-hvac-local-of-long-island-profile-129795.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 166,
    "platformName": "blog-mall.com",
    "profileUrl": "https://247hvaclongisland.blog-mall.com/43712365/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 167,
    "platformName": "blogoxo.com",
    "profileUrl": "https://247hvaclongisland.blogoxo.com/43551976/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 168,
    "platformName": "listizze.com",
    "profileUrl": "https://listizze.com/directory/24-7-hvac-local-of-long-island-profile-95454.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 169,
    "platformName": "listingsceo.com",
    "profileUrl": "https://listingsceo.com/directory/24-7-hvac-local-of-long-island-profile-104488.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 170,
    "platformName": "homeservicezz.com",
    "profileUrl": "https://homeservicezz.com/directory/24-7-hvac-local-of-long-island-profile-97475.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 171,
    "platformName": "homerepairzz.com",
    "profileUrl": "https://homerepairzz.com/directory/24-7-hvac-local-of-long-island-profile-97639.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 172,
    "platformName": "greentornado.com",
    "profileUrl": "https://greentornado.com/directory/24-7-hvac-local-of-long-island-profile-95160.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 173,
    "platformName": "dailycategories.com",
    "profileUrl": "https://dailycategories.com/directory/24-7-hvac-local-of-long-island-profile-95744.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 174,
    "platformName": "usapromoted.com",
    "profileUrl": "https://usapromoted.com/directory/24-7-hvac-local-of-long-island-profile-76562.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 175,
    "platformName": "blogsvila.com",
    "profileUrl": "https://247hvaclongisland.blogsvila.com/43477506/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 176,
    "platformName": "usafeatured.com",
    "profileUrl": "https://usafeatured.com/directory/24-7-hvac-local-of-long-island-profile-99385.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 177,
    "platformName": "usaadvertised.com",
    "profileUrl": "https://usaadvertised.com/directory/24-7-hvac-local-of-long-island-profile-76734.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 178,
    "platformName": "dailyhitblog.com",
    "profileUrl": "https://247hvaclongisland.dailyhitblog.com/48816797/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 179,
    "platformName": "blogsidea.com",
    "profileUrl": "https://247hvaclongisland.blogsidea.com/50040577/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 180,
    "platformName": "spotlightzz.com",
    "profileUrl": "https://spotlightzz.com/directory/24-7-hvac-local-of-long-island-profile-92438.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 181,
    "platformName": "repairzz.com",
    "profileUrl": "https://repairzz.com/directory/24-7-hvac-local-of-long-island-profile-72376.aspx",
    "status": "LIVE",
    "category": "Home Services & Contractors",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 182,
    "platformName": "SeeBusinesses.com",
    "profileUrl": "https://seebusinesses.com/directory/24-7-hvac-local-of-long-island-profile-68481.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 183,
    "platformName": "usastorefronts.com",
    "profileUrl": "https://usastorefronts.com/directory/24-7-hvac-local-of-long-island-profile-65958.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 184,
    "platformName": "buyoutblog.com",
    "profileUrl": "https://247hvaclongisland.buyoutblog.com/43196597/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 185,
    "platformName": "usacategories.com",
    "profileUrl": "https://usacategories.com/directory/24-7-hvac-local-of-long-island-profile-72814.aspx",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 186,
    "platformName": "storefrontzz.com",
    "profileUrl": "https://storefrontzz.com/directory/24-7-hvac-local-of-long-island-profile-74853.aspx",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 187,
    "platformName": "prublogger.com",
    "profileUrl": "https://247hvaclongisland.prublogger.com/42215740/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 188,
    "platformName": "blazingblog.com",
    "profileUrl": "https://247hvaclongisland.blazingblog.com/43178864/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 189,
    "platformName": "linkedin-directory.com",
    "profileUrl": "http://linkedin-directory.com/details.php?id=353081",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 190,
    "platformName": "blog2learn.com",
    "profileUrl": "https://247hvaclongisland.blog2learn.com/91138684/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 191,
    "platformName": "searchdomainhere.com",
    "profileUrl": "https://searchdomainhere.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_369611.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 192,
    "platformName": "toptendir.net",
    "profileUrl": "https://toptendir.net/24/7-HVAC-LOCAL-OF-LONG-ISLAND_361908.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 193,
    "platformName": "efdir.com",
    "profileUrl": "https://efdir.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_403444.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 194,
    "platformName": "newbigblog.com",
    "profileUrl": "https://247hvaclongisland.newbigblog.com/239872/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 195,
    "platformName": "ifidir.com",
    "profileUrl": "http://ifidir.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_489591.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 196,
    "platformName": "relateddirectory.org",
    "profileUrl": "https://relateddirectory.org/details.php?id=330337",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 197,
    "platformName": "relevantdirectories.com",
    "profileUrl": "http://relevantdirectories.com/24/7-HVAC-LOCAL-OF-LONG-ISLAND_355969.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 198,
    "platformName": "smartdir.org",
    "profileUrl": "https://smartdir.org/24/7-HVAC-LOCAL-OF-LONG-ISLAND_362871.html",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 199,
    "platformName": "relevantdirectory.biz",
    "profileUrl": "https://relevantdirectory.biz/details.php?id=309160",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 200,
    "platformName": "businessfreedirectory.biz",
    "profileUrl": "https://businessfreedirectory.biz/details.php?id=610511",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 201,
    "platformName": "bizbangboom.com",
    "profileUrl": "https://www.bizbuildboom.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "needs_review",
    "isDuplicateUrl": true,
    "auditNote": "Domain mismatch (bizbuildboom.com) and duplicate URL shared with another directory record"
  },
  {
    "id": 202,
    "platformName": "bizmakersamerica.org",
    "profileUrl": "https://www.bizmakersamerica.org/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 203,
    "platformName": "BizBuildBoom.com",
    "profileUrl": "https://www.bizbuildboom.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Local & Business Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": true
  },
  {
    "id": 204,
    "platformName": "BizForgeUSA.com",
    "profileUrl": "https://www.bizforgeusa.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Regional & US Directories",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  },
  {
    "id": 205,
    "platformName": "BlogBangBoom.com",
    "profileUrl": "https://www.blogbangboom.com/700-rockaway-turnpike-400-lawrence-new-york-11559/other/24-7-hvac-local-of-long-island",
    "status": "LIVE",
    "category": "Social & Content Platforms",
    "verificationStatus": "verified",
    "isDuplicateUrl": false
  }
];

export const PUBLIC_BUSINESS_LISTINGS: BusinessListing[] = ALL_BUSINESS_LISTINGS.filter(
  (item) => item.verificationStatus === 'verified'
);

export const FLAGGED_LISTINGS_AUDIT: BusinessListing[] = ALL_BUSINESS_LISTINGS.filter(
  (item) => item.verificationStatus === 'needs_review'
);

// Curated verified listings from the directory dataset for the footer carousel (slides beyond the original 6)
const CURATED_IDS = [2, 3, 4, 10, 12, 13];
export const CURATED_FOOTER_DIRECTORY_LISTINGS: BusinessListing[] = CURATED_IDS.map(
  (id) => PUBLIC_BUSINESS_LISTINGS.find((item) => item.id === id)
).filter((item): item is BusinessListing => Boolean(item));
