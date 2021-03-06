import Head from "next/head";
import Navbar from "components/navbar";
import { minifyRecords, table } from "./api/utils/Airtable";
import Todo from "components/todo";
import { TodosContext } from "contexts/TodosContext";
import { useEffect, useContext } from "react";
import auth0 from "./api/utils/Auth0";
import TodoForm from "components/TodoForm";
import Layout from "components/Layout";

export default function Home({ initialTodos, user }) {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <Layout title="Authenticated TODO App">
      <Navbar user={user} />
      <main>
        {user && (
          <>
            <h1 className="text-2xl text-center pt-5 dark:text-white border-t-2">
              My Todos
            </h1>
            <TodoForm />
            <ul>
              {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </ul>
          </>
        )}
        {!user && (
          <p className="dark:text-white text-center my-5 p-2 rounded-lg text-gray-600 bg-gray-100 dark:bg-gray-600 text-lg">
            You should log in to save your TODOs
          </p>
        )}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  let todos = [];
  try {
    if (session?.user) {
      todos = await table
        .select({
          filterByFormula: `userId = '${session.user.sub}'`,
        })
        .firstPage();
    }
    return {
      props: {
        initialTodos: minifyRecords(todos),
        user: session?.user || null,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}
