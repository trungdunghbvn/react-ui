import React, { Component } from "react";
import { PortalsManager } from "../PortalsManager";
import {
  UniqueIdFactory,
  UniqueIdFactoryContext,
  globalIdGeneratorFactory,
} from "../../utilities/unique-id";

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.uniqueIdFactory = void 0;
    this.uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);
  }

  render() {
    const { children } = this.props;
    return (
      <UniqueIdFactoryContext.Provider value={this.uniqueIdFactory}>
        <PortalsManager>{children}</PortalsManager>
      </UniqueIdFactoryContext.Provider>
    );
  }
}
