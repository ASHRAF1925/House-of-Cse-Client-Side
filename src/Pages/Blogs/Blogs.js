import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <h3>There are some Important Questions to know</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1 what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            The Firebase Realtime Database lets us build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.Firebase Authentication provides backend services,
            easy-to-use SDKs, and ready-made UI libraries to authenticate users
            to your app. It supports authentication using passwords, phone
            numbers, popular federated identity providers like Google, Facebook
            and Twitter, and more. These are the Reasons of using Firebase.
            <br />
            Other options to implement authentication are:
            <p>1.Auth0</p>
            <p>2.Clerk</p>
            <p>3.KeyCloak</p>
            <p>4.Cognito</p>
            <p>5.SuperTokens</p>
            <p>6.Nhost</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. How does the private route work?
          </Accordion.Header>
          <Accordion.Body>
            Private Routes vary based on the Apps, For example, Dashboard, User
            Profile, App Settings, Home etc. In simple words, These routes can
            be accessed only after login. The constraints for Public and Private
            routes are that Public routes should not be accessed after login and
            Private routes should not be accessible before login. In this
            article, we can see. How to create public and private routes using
            react-router for your react apps. Let's start
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4.What is Node? How does Node work?
          </Accordion.Header>
          <Accordion.Body>
            Node.js is a server-side platform built on Google Chrome's
            JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in
            2009 and its latest version is v0.10.36. The definition of Node.js
            as supplied by its official documentation is as follows Node.js is a
            platform built on Chrome's JavaScript runtime for easily building
            fast and scalable network applications. Node.js uses an
            event-driven, non-blocking I/O model that makes it lightweight and
            efficient, perfect for data-intensive real-time applications that
            run across distributed devices. Node.js is an open source,
            cross-platform runtime environment for developing server-side and
            networking applications. Node.js applications are written in
            JavaScript, and can be run within the Node.js runtime on OS X,
            Microsoft Windows, and Linux. Node.js also provides a rich library
            of various JavaScript modules which simplifies the development of
            web applications using Node.js to a great extent. Node.js accepts
            the request from the clients and sends the response, while working
            with the request node.js handles them with a single thread. To
            operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. <p>Node.js basically
            works on two concept</p> <p>1.Asynchronous</p> <p>2.Non-blocking I/O</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
