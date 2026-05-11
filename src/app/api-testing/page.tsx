export default function ApiTestingPage() {
  return (
    <main>

      <section>
        <div>
          <h1>QA API Playground</h1>

          <p>
            Test and validate blog API endpoints
            with structured request/response workflows.
          </p>
        </div>
      </section>

      <section>
        <h2>GET All Posts</h2>

        <button>
          Get All Posts
        </button>
      </section>

      <section>
        <h2>GET Single Post</h2>

        <form>
          <input
            type="number"
            placeholder="Enter Post ID"
          />

          <button type="submit">
            Get Post
          </button>
        </form>
      </section>

    </main>
  );
}