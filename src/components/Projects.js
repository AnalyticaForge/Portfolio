function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>

      <ul>
        <li>
          📊{" "}
          <a
            href="https://github.com/AnalyticaForge/sales-data-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Sales Data Analysis</strong>
          </a>

          <p>
            Performed end-to-end sales analysis using SQL and Microsoft Excel.
            Cleaned, explored, and analyzed sales data to uncover revenue
            trends, top-selling products, customer purchasing patterns, and key
            business insights through data visualization and reporting.
          </p>
        </li>

        <li>
          🗄️{" "}
          <a
            href="https://github.com/AnalyticaForge"
            target="_blank"
            rel="noreferrer"
          >
            <strong>SQL Business Insights</strong>
          </a>

          <p>
            Wrote SQL queries to answer real-world business questions involving
            sales performance, customer segmentation, product analysis, monthly
            trends, and business reporting.
          </p>
        </li>

        <li>
          📈{" "}
          <a
            href="https://github.com/AnalyticaForge"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Interactive Excel Dashboard</strong>
          </a>

          <p>
            Developed an interactive dashboard using Pivot Tables, Pivot Charts,
            KPIs, slicers, and Excel formulas to visualize business performance
            and support data-driven decision-making.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;