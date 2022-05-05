import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 style={{ fontSize: "2rem" }}>
        what is difference between javascript and node js?
      </h3>
      <p
        style={{
          fontSize: "1.7rem",
          lineHeight: "3rem",
          marginBottom: "2rem",
          textTransform: "none",
        }}
      >
        There are many differences between javascript and node js. Javascript is
        a interpreted, high level programming language that is used for writing
        script on the browser on the other hand Node Js is a Javascript runtime
        environment. Basically Javascript can only be run in the browser. If we
        want to use it outside the browse or server site then we can run with
        the help of Node Js. Javascript is used in front-end development on the
        other hand Node JS is used in server-side development.{" "}
      </p>

      <h3 style={{ fontSize: "2rem" }}>
        {" "}
        when should you use node js and when should you use mongodb?
      </h3>
      <p
        style={{
          fontSize: "1.7rem",
          lineHeight: "3rem",
          marginBottom: "2rem",
          textTransform: "none",
        }}
      >
        Any project needs a programming enviorment that provides us programming
        tools or platfrom to write or run our programming language in server
        site. Node Js such as tool for the javascript programming language.
        There are many for other different language such as python, java, c,
        c++, ruby etc. so, if we want to write Javascript in the server side
        then we should use Node Js.
      </p>

      <p
        style={{
          fontSize: "1.7rem",
          lineHeight: "3rem",
          marginBottom: " 1rem",
          textTransform: "none",
        }}
      >
        Every project needs database to store different kinds of data. Database
        provide us space and allow some operation like create, read, delete,
        update. MongoDb is one such database. MySql, MariaDB, CouchDB are
        examples of other database.
      </p>
      <h3 style={{ fontSize: "2rem" }}>
        what is difference between sql and nosql database?
      </h3>
      <p
        style={{
          fontSize: "1.7rem",
          lineHeight: "3rem",
          marginTop: " .5rem",
          textTransform: "none",
        }}
      >
        SQL database are primarily called as Relational Databases on the other
        hand NoSQL database are primarily called as non-relational database. SQL
        databse are static schema on the other hand NoSQL database are dynamic
        schema. SQL database are table-based, while NoSQL database are
        document-based. SQL databases are better for multi-row transactions,
        while NoSQL is better for unstructured data like documents or JSON.
      </p>
    </div>
  );
};

export default Blogs;
