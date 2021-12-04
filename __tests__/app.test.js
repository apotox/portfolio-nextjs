import getGithubRepositories from "../lib/get-github-repositories"


describe('app', ()=> {
    it('should not throw an error!',async ()=> {
        await getGithubRepositories('apotox')
    })
})