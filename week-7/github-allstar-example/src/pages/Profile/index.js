import React, {useState, useEffect}from 'react'

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import './style.css'

import {getUser , getUserRepos} from '../../service'

import {useParams} from 'react-router'

export default function Profile(){
    const [user, setUser] = useState({});
    const [repos, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    const { name } = useParams();
    useEffect(()=> {
        Promise.all([getUser(name), getUserRepos(name)]).then(values => {
            setUser(values[0]);
            setRepo(values[1]);
            setLoading(false);
        });
    }, [name])
    
    if(loading) {
        return (
            <Spinner animation="border" role="status" variant="secondary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    return(
        <div className="container profile">
            <div className="header">
                <h1>{user.name}</h1>
                <Image className="header-img" 
                    src={user.avatar_url}
                    thumbnail
                    roundedCircle />
            </div>
            <div className="home-info">
                Followers: {user.followers} | Following: {user.following}
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">Ver GitHub</Button>
                </a>
            </div>
            <div className="repositories">
            {
                repos.map(repo => (
                    <Card className="repository" key={repo.id}>
                        <Card.Body>
                        <Card.Title>{repo.name}</Card.Title>
                        <Card.Text>{repo.description}</Card.Text>
                        <Card.Text>{repo.language}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>

        </div>
    )
}
