import { Component } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  newsJson = [
    {
      "name": "Software Engineering Program Ranked Top in the Nation",
      "picture": "https://example.com/image1.jpg",
      "description": "The software engineering program at XYZ University has been ranked as the best in the country by a leading industry publication. The program's rigorous curriculum and strong industry connections were cited as key factors in the ranking.",
      "user": "John Smith"
    },
    {
      "name": "New Partnership with ABC Tech",
      "picture": "https://example.com/image2.jpg",
      "description": "XYZ University has announced a new partnership with ABC Tech, a leading software development company. The partnership will provide students with valuable internship opportunities and access to cutting-edge technology.",
      "user": "Jane Doe"
    },
    {
      "name": "Innovative Research in Artificial Intelligence",
      "picture": "https://example.com/image3.jpg",
      "description": "A team of researchers at XYZ University has developed a groundbreaking new algorithm for machine learning. The research has the potential to revolutionize the field of artificial intelligence.",
      "user": "Robert Johnson"
    },
    {
      "name": "Expansion of Computer Science Department",
      "picture": "https://example.com/image4.jpg",
      "description": "Due to increased demand for computer science education, XYZ University is expanding its computer science department. The expansion will include new faculty hires and state-of-the-art facilities.",
      "user": "Emily Wilson"
    },
    {
      "name": "New Software Development Bootcamp",
      "picture": "https://example.com/image5.jpg",
      "description": "XYZ University is launching a new intensive bootcamp program for aspiring software developers. The program will provide hands-on training and mentorship from industry professionals.",
      "user": "Michael Brown"
    },
    {
      "name": "Collaboration with Global Tech Conference",
      "picture": "https://example.com/image6.jpg",
      "description": "XYZ University will be hosting the annual Global Tech Conference next year. The conference will bring together industry leaders, researchers, and students from around the world.",
      "user": "Sarah Thompson"
    },
    {
      "name": "Inaugural Hackathon a Success",
      "picture": "https://example.com/image7.jpg",
      "description": "XYZ University recently held its first-ever hackathon, attracting participants from across the country. The event showcased the creativity and problem-solving skills of the university's students.",
      "user": "Daniel Garcia"
    },
    {
      "name": "New Cybersecurity Certificate Program",
      "picture": "https://example.com/image8.jpg",
      "description": "To meet the growing demand for cybersecurity professionals, XYZ University is launching a new certificate program in cybersecurity. The program will cover topics such as network security, ethical hacking, and data protection.",
      "user": "Olivia Davis"
    },
    {
      "name": "Partnership with Local Startups",
      "picture": "https://example.com/image9.jpg",
      "description": "XYZ University has established partnerships with several local startups, providing students with internship and job placement opportunities. The collaborations aim to support the growth of the local tech ecosystem.",
      "user": "Matthew Wilson"
    },
    {
      "name": "Research Grant for Data Science Project",
      "picture": "https://example.com/image10.jpg",
      "description": "A team of researchers at XYZ University has been awarded a significant grant to fund a data science project. The project will explore new techniques for analyzing large datasets and extracting valuable insights.",
      "user": "Sophia Anderson"
    }
  ]
}