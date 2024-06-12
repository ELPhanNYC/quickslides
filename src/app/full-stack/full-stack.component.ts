import { Component } from '@angular/core';

@Component({
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrls: ['./full-stack.component.scss']
})
export class FullStackComponent {
  slides = [
    {header:"Full Stack: A Simple Definition", content:[
      "Let's imagine a piece of software consisting of multiple layers that interact with each other to provide functionality to that piece of software.",
      "These various layer come together to form the \"full stack\".",
      "A person who understands how to interconnect all these layers can be consider a \"Full-Stack Engineer\".",
      "Now, let us dive into the different layers of the stack...",
    ]},
    {header:"Layer: The Front End", content:[
      "The \"front end\" is the portion of software that a user can interact with directly.",
      "A \"Front End Developer\" is tasked with making the UI (User Interface) of an application functional. The UI itself may or may not be designed by the front end developer as it may be drafted by a \"UI Designer\" on tools such as Figma.",
      "To make the front end suit the needs of the application, a front end developer may use \"endpoints\" from the \"back end\" to gather data that will be used on the front end.",
      "Note that terms such as \"full stack\" or \"front end\" are often associated with web development but it can also be generalized to various parts of software development."
    ]},
    {header:"Front End: Languages and Tools", content:[
      "Languages and tools commonly used in front end development include: HTML, CSS, and JavaScript. In industry, it is common to see the use of JavaScript Frameworks, such as Angular and React, that streamline the development of the front end of an application.",
      "Variations of these languages and tools also exist such SCSS, SASS, TailwindCSS, and TypeScript.",
    ]},
    {header:"Layer: The Back End", content:[
      "As previously mention, the \"back end\" is used to supply data to the front end via various endpoints. The front end itself may also be served by the same server from which is it receiving data.",
      "The back end of an application is generally a server that is running code listening for a request from an application for a specific route (ie. the route \"/login\" by be sent by a application front end to the server when a client wants to log in).",
      "The server acts as an \"API\"(or Application Programming Interface) to the front end as the front end need not know what code lays at the server but rather cares only about the content itself.",
      "The back end is often where complex algorithms are used to produce the data that one may see on the front end. To better understand this, use ChatGPT as an example. When the user enters a prompt, that prompt is sent to a server that uses LLMs (Large Language Models) to provide a response back to the user.",
      "A Back End Developer may be in charge of writing/debugging the algorithms used to provide data for a specific route/endpoint on the server."
    ]},
    {header:"Back End: Languages and Tools", content:[
      "Languages commonly used for developing back ends are Python, Java, Scala, and even JavaScript. These languages feature libraries (Python's Django, Java's Spring Boot, Javascript's Express.js, etc.) that aid in the development of endpoints.",
      "Often, the back end obtains and manipulates data it requests from a database and thus an important tool to a back end developer are database APIs that help the programmer fetch data from a database.",
    ]},
    {header:"Layer? Databases", content:[
      "Although not directly a layer (full stack often only refers to the front end and back end), databases play an important role in the development of applications and software.",
      "As aforementioned, Back End Developer may leverage APIs to request data to be used in an algorithm or be sent back to a client from a database. For example, when utilizing the MEAN Stack(MongoDB, Express.js, Angular, and Node), a developer may use the mongoose library that helps simplify the syntax of making request from an Express.js server to a MongoDB database."
    ]},
    {header:"Other Tools: AWS, Azure, Oracle, DigitalOcean", content:[
      "Cloud service providers such as AWS, Azure, Oracle, and DigitalOcean are used in the deployment and management of various applications.",
      "They offer various services related to networking, computing, storage, middleware, IoT, auto-scaling, and other processing capacity.",
      "These services are available under different models such as IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service)."
    ]},
    {header:"Other Tools: Docker", content:[
      "Docker is a powerful tool for developing applications, offering several key benefits that streamline the development, deployment, and management of software.",
      "Docker ensures that applications run the same way in different environments (development, testing, production), eliminating the \"it works on my machine\" problem.",
      "Docker containers provide a lightweight form of virtualization, allowing multiple containers to run on the same host without interfering with each other. These containers are also portable, allowing them to be ran on any Docker-supported device.",
    ]}
  ]
}
