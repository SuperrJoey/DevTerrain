export const parseContributions = (svgHtml: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgHtml, "text/html");
    
    // Target the new GitHub contribution calendar structure
    const contributionElements = Array.from(doc.querySelectorAll(".ContributionCalendar-day[data-date]"));
    
    console.log(`Found ${contributionElements.length} contribution elements`);
    
    if (contributionElements.length === 0) {
        console.log("No contribution elements found");
        return [];
    }

    const data = contributionElements.map((element, index) => {
        const date = element.getAttribute("data-date") || "";
        const level = parseInt(element.getAttribute("data-level") || "0");
        
        // Convert GitHub's level system to estimated counts
        // Level 0: 0, Level 1: ~2, Level 2: ~5, Level 3: ~8, Level 4: ~12
        const count = level === 0 ? 0 : 
                     level === 1 ? 2 : 
                     level === 2 ? 5 : 
                     level === 3 ? 8 : 12;
        
        // Debug: Show some elements with non-zero levels
        if (level > 0 && index < 10) {
            console.log(`Active day ${index}:`, { date, level, count });
        }
        
        return { date, count };
    }).filter(item => item.date !== ""); // Only keep items with valid dates

    console.log(`Parsed ${data.length} contributions. Sample:`, data.slice(0, 3));
    return data;
}