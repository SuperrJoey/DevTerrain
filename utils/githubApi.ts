export const fetchGitHubContributions =  async (username: string) => {

    //calling your own api endpoint instead of github
    const res = await fetch(`/api/github/contributions?username=${username}`);

    if (!res.ok) {
        throw new Error("Failed to fetch Github data");
    }

    //parse the json response
    const data = await res.json();

    // checking the error
    if (data.error) {
        throw new Error(data.error);
    }

    //returning the html string
    return data.html;
}