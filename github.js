class Github {
    constructor(){
        this.client_id ='270586408b472dcd9780';
        this.client_secret = '33572141fecbdf9d81e235b5bad552a2c4a49dd7';
        this.repos_count = 8;
        this.repos_sort = 'created: asc';
    }

    //get user
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_pade=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}