export const parseContributions = (svgHtml: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgHtml, "text/html");
    const rects = Array.from(doc.querySelectorAll("rect"));

    const data = rects.map((rect) => ({
        date: rect.getAttribute("data-date")!,
        count: parseInt(rect.getAttribute("data-count") || "0"),
    }));

    return data;
    
}