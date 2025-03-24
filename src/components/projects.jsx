"use client"

import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error))
  }, [username])

  return (
    <Container className="py-4" id="projects">
        <h2 className="mb-4" >Projects</h2>
        <Row>

        </Row>
      <h2 className="mb-4">GitHub Repositories</h2>
      <Row>
        {repos.map((repo) => (
          <Col key={repo.id} md={4} className="mb-3">
            <Card className="h-100 bg-white border-0 shadow-sm">
              <Card.Body>
                <Card.Title>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                  >
                    {repo.name}
                  </a>
                </Card.Title>

                <Card.Text className="text-muted">{repo.description || "No description available"}</Card.Text>

                <div className="d-flex mt-2">
                  <Badge bg="light" text="dark" className="me-2">
                    ⭐ {repo.stargazers_count}
                  </Badge>
                  <Badge bg="light" text="dark" className="me-2">
                    Forks: {repo.forks_count}
                  </Badge>
                  <Badge bg="light" text="dark">
                    {repo.language}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default GitHubRepos

