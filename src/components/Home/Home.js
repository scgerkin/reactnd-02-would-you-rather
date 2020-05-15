import React from "react";

export class Home extends React.Component {
  render() {
    return (
        <div>
          <ul>
            <li>View unanswered questions (DEFAULT)</li>
            <li>View answered questions</li>
            <li>Create a question</li>
            <li>Edit account details</li>
          </ul>
        </div>
    );
  }
}
