import axios from 'axios'
import * as constants from "../app/constantFile"


const api = axios.create({
    baseURL: constants.apiURL,
    headers: {
        'Accept': 'application/json',
    }  
})


export const insertTeam = payload => api.post(`/teams`, payload)
export const getAllTeams = () => api.get(`/teams`)
export const deleteAllTeams = id => api.delete(`/teams`)
export const getTeamByName = name => api.get(`/teams/name/${name}`)
export const updateTeamByName = (name, payload) => api.put(`/teams/update/${name}`, payload)
export const deleteTeamByName = name => api.delete(`/teams/delete/${name}`)
export const logInTeam = (name) => api.put(`/teams/login/${name}`, '')
//export const getTeamById = id => api.get(`/teams/id/${id}`)
//export const updateTeamById = (id, payload) => api.put(`/teams/${id}`, payload)
//export const deleteTeamById = id => api.delete(`/teams/${id}`)

const apis = {
    insertTeam,
    getAllTeams,
    getTeamByName,
    updateTeamByName,
    logInTeam,
    deleteTeamByName,
    deleteAllTeams
    //getTeamById,
    //updateTeamById,
    //deleteTeamById,
}

export default apis