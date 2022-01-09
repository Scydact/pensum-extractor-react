import { useCallback, useContext } from "react";
import { matSelectHelpers, MatSelectionDispatchContext, MatSelectionFilterContext, MatSelectionModeContext, MatSelectionTrackerContext } from 'contexts/mat-selection';
import { classnames } from 'lib/format-utils';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MatRow from "./MatRow";
import { Droppable, Draggable } from "react-beautiful-dnd";


type PeriodProps = {
  period: Pensum.Mat[],
  periodNum: number,
  cumlen: number
};

/** Displays a single period from the pensum as table rows. */
export const Period = ({ period, periodNum, cumlen = 0 }: PeriodProps) => {
  const dispatch = useContext(MatSelectionDispatchContext);
  const trackerMode = useContext(MatSelectionModeContext);
  const tracker = useContext(MatSelectionTrackerContext);
  const filter = useContext(MatSelectionFilterContext);

  const isAllMatsOnSameTracker = period.every(mat => tracker[trackerMode]?.has(mat.code));
  const commonTracker = matSelectHelpers.getCommonTracker(tracker, period.map(mat => mat.code));

  // css classes
  const cl = [
    'row-period-num', 
    'click-target',

    // Hover color according to tracker mode.
    'table-hover-' + ((isAllMatsOnSameTracker) ? 'default' : trackerMode),

    // Common tracker sets period color only if all mats have a tracker in common.
    commonTracker,
  ];


  const filteredPeriod = period.filter(mat => {
    const tr = matSelectHelpers.getTracker(tracker, mat.code);
    return !filter.has(tr);
  });


  const onClick = useCallback((evt: any) => {
    dispatch({ type: 'selectPeriod', payload: filteredPeriod.map(x => x.code) });
  }, [filteredPeriod, dispatch]);

  if (filteredPeriod.length === 0) return null;

  const matrows = filteredPeriod.map((mat, i) =>
    <Draggable
      key={mat.code}
      draggableId={mat.code}
      isDragDisabled={false} //TODO: Disable if editor is off!!!
      index={i}>
      {(provided, snapshot) => <MatRow
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        key={mat.code}
        mat={mat}
        idx={i + cumlen} />}
    </Draggable>
  )

  return <Row className="row-period">
    <Col
      className={classnames(cl)}
      onClick={onClick}
      data-value={periodNum}>
      {periodNum}
    </Col>
    
    <Droppable key={periodNum} droppableId={`${periodNum}`}>
      {(provided, snapshot) => (
        <Col 
          className="row-mat-group" 
          ref={provided.innerRef} 
          {...provided.droppableProps}>
            {matrows}
            {provided.placeholder}
        </Col>
      )}
    </Droppable>

    
  </Row>
}

export default Period;