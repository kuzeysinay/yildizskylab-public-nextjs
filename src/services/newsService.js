export async function fetchNews(pageId = 1, pageSize = 5) {
    const response = await fetch(`https://yusufacmaci.com/yildizskylab/news?page_id=${pageId}&page_size=${pageSize}`);
    const data = await response.json();
    return data;
  }

