import getGithubRepositories from "../lib/get-github-repositories"


describe('app', ()=> {
    it('should be able to add a new todo',async ()=> {
        await getGithubRepositories('apotox')
    })
})