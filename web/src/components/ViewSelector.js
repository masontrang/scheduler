function ViewSelector() {
  return (
    <div>
      Select View
      <form>
        <input type="radio" id="monthly" name="viewSelection" value="monthly" />
        <label htmlFor="monthly">Month</label>
        <input type="radio" id="weekly" name="viewSelection" value="weekly" />
        <label htmlFor="weekly">Week</label>
        <input type="radio" id="List" name="viewSelection" value="List" />
        <label htmlFor="list">List</label>
      </form>
    </div>
  );
}

export default ViewSelector;
