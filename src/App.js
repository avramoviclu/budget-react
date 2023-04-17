import { Container, Stack, Button } from "react-bootstrap"
import BudgetCard from "./components/BudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"

function App() {
  return <Container className="my-4">
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Budgets</h1>
      <Button variant="primary">Add Budget</Button>
      <Button variant="outline-primary">Add Expense</Button>
    </Stack>
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem", 
      alignItems: "flex-start" }}
    >
      <BudgetCard name="Entertainment" amount={200} max={1000}></BudgetCard>
    </div>
  </Container>;
}

export default App;
