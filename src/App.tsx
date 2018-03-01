import * as React from 'react';
import './App.css';
import {
  IGroupDividerProps,
  GroupedList,
  IGroup
} from 'office-ui-fabric-react/lib/components/GroupedList/index';
import { GroupHeader } from 'office-ui-fabric-react/lib/components/GroupedList/GroupHeader';
import {
  Selection,
  SelectionMode
} from 'office-ui-fabric-react/lib/utilities/selection/index';
// https://github.com/OfficeDev/office-ui-fabric-react/wiki/Using-icons
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
initializeIcons();

 /* tslint:disable:no-debugger */

interface Item {
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

class App extends React.Component {
  private _selection: Selection;
  constructor(props: {}) {
    super(props);
    _items = [
      {
        key: 'item-0',
        name: 'android.support.test.espresso.NoMatchingViewException: No views in hierarchy found matching: (with text: is "Everyone" and has sibling: with id: com.instructure.teacher:id/assigneeSubtitleView)'
      },
      {
        key: 'item-1',
        name: 'java.lang.RuntimeException: Waited for the root of the view hierarchy to have window focus and not request layout for 10 seconds. If you specified a non default root matcher, it may be picking a root that never takes focus.'
      }
    ];
    /* tslint:disable:max-line-length */
    // selection is required.
    // toggleRangeSelected errors on group click if selection is null
    this._selection = new Selection();

    const group0: IGroup = {
      key: 'group-0',
      name: 'AssigneeListPageTest#displaysStudentItems',
      startIndex: 0,
      count: 1,
    };

    const group1: IGroup = {
      key: 'group-1',
      name: 'SpeedGraderCommentsPageTest#displaysAuthorName',
      startIndex: 1,
      count: 1,
    };

    _groups = [group0, group1];

    this._onRenderCell = this._onRenderCell.bind(this);
    this._onRenderHeader = this._onRenderHeader.bind(this);
  }

  public testAlert(): void {
    alert('hello');
  }

  public render(): JSX.Element {
    return (
      <div className='App'>
        <GroupedList
          items={_items}
          onRenderCell={this._onRenderCell}
          selectionMode={SelectionMode.none}
          selection={this._selection}
          groups={_groups}
          groupProps={
            {
              onRenderHeader: this._onRenderHeader
            }
          }
        />
      </div>
    );
  }

  // Props is set via .bind in _onRenderHeader
  private _onGroupHeaderClick(props: IGroupDividerProps, group: IGroup): void {
    if (props.onToggleCollapse !== undefined) { props.onToggleCollapse(group); }
  }

  private _onRenderHeader(props: IGroupDividerProps): JSX.Element {
    props.onGroupHeaderClick = this._onGroupHeaderClick.bind(null, props);

    return <GroupHeader { ...props } />;
  }

  private _onRenderCell(nestingDepth: number, item: Item, itemIndex: number): JSX.Element {
    return (
      <div data-selection-index={itemIndex}>
        <span className='GroupedList-name'>
          {item.name}
        </span>
      </div>
    );
  }
}

export default App;
