import './dashboard.styles.css';
const DashBoard = () => {
  return (
    <div className="main-container content-left-padding">
      <div className="containter-fluid container-md container-sm dashboard-wrapper">
        <div className="dashboard-content-container">
          <div className="total-balance"></div>
          <div className="total-income"></div>
          <div className="total-outcome"></div>
          <div className="analitycs"></div>
          <div className="graphics"></div>
          <div className="transactions"></div>
          <div className="new-transaction"></div>
          <div className="account-details"></div>
          <div className="info"></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
