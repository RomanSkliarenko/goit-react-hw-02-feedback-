import React from "react";
import WidgetButtons from "../WidgetButtons/widgetButtons";
import WidgetNotification from "../WidgetNotification/widgetNotification";
import WidgetPositiveFeedback from "../WidgetPositiveFeedback/widgetPositiveFeedback";
import WidgetStatistics from "../WidgetStatistic/widgetStatistics";
import WidgetTitle from "../WidgetTitle/widgetTitle";
import WidgetTotal from "../WidgetTotal/widgetTotal";
import styles from "./widget.module.css";

class Widget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateStatistic = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  positiveFeedback() {
    const { good } = this.state;
    return Math.round((good / this.totalFeedback()) * 100);
  }
  render() {
    return (
      <div className={styles.widgetWrapper}>
        <WidgetTitle widgetTitleText="Please, leave feedback" />
        <WidgetButtons updateStatistic={this.updateStatistic} />
        {this.totalFeedback() > 0 ? (
          <>
            <WidgetStatistics {...this.state} />
            <WidgetTotal total={this.totalFeedback()} />
            <WidgetPositiveFeedback
              positiveFeedback={this.positiveFeedback()}
            />
          </>
        ) : (
          <WidgetNotification message="No feedback given yet..." />
        )}
      </div>
    );
  }
}
export default Widget;
