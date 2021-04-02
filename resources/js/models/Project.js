class Project{

    static all(then){
        return axios.get('/projects')
        .then( ({data}) =>then(data) );
    }
}
export default Project;
