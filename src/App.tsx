import * as React from 'react';
import './App.css';
import {
  GroupedList,
  IGroup
} from 'office-ui-fabric-react/lib/components/GroupedList/index';
import { SelectionMode } from 'office-ui-fabric-react/lib/utilities/selection/index';

export interface Item {
  /**
   * Unique identifier for the item.
   */
  key: string;
  /**
   * Display name for the item, rendered on the header.
   */
  name: string;
}

let _items: Item[];
let _groups: IGroup[];

interface Props {
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    _items = [
      {
        'key': 'item-0',
        'name': 'Item 0'
      },
      {
        'key': 'item-1',
        'name': 'Item 1'
      },
      {
        'key': 'item-2',
        'name': 'Item 2'
      },
      {
        'key': 'item-3',
        'name': 'Item 3'
      },
      {
        'key': 'item-4',
        'name': 'Item 4'
      },
    ];

    var group0: IGroup = {
      'key': 'group-0',
      'name': 'group 0',
      'startIndex': 0,
      'count': 1,
    };

    var group1: IGroup = {
      'key': 'group-1',
      'name': 'group 1',
      'startIndex': 1,
      'count': 1,
    };

    var group2: IGroup = {
      'key': 'group-2',
      'name': 'group 2',
      'startIndex': 2,
      'count': 1,
    };

    var group3: IGroup = {
      'key': 'group-3',
      'name': 'group 3 yay',
      'startIndex': 3,
      'count': 1,
    };

    _groups = [group0, group1, group2, group3];
    // debugger;
  }

  render() {
    return (
      <div className="App">
        <GroupedList
          // ref={ this._createGroupedListRef }
          items={_items}
          onRenderCell={this._onRenderCell}
          selectionMode={SelectionMode.none}
          groups={_groups}
        />
      </div>
    );
  }

  private _onRenderCell(nestingDepth: number, item: Item, itemIndex: number) {
    return (
      <div data-selection-index={itemIndex}>
        <span>
          {item.name}
        </span>
      </div>
    );
  }
}

export default App;
