
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ActivePensumContext from "contexts/active-pensum";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MatCode, { LongMatCode } from "components/MatCode";
import PensumRowNodesContext from "contexts/pensum-row-nodes";


export default function Details() {
  const { state: { matData, pensum } } = useContext(ActivePensumContext);
  const { map: rowNodeMap, scrollToRow } = useContext(PensumRowNodesContext);

  const navigate = useNavigate();
  const params = useParams();
  const code = params.code;

  if (!code) return <Navigate to="/mat" />;

  const mat = matData.codeMap.get(code);
  if (!mat) return <Invalid code={code} />;

  const title = <><MatCode data={mat.code} /> <span>{mat.name}</span></>;

  const periodName = (pensum?.periodType.name || 'Periodo') + ':';
  const generalInfo = <Container>
    <Row>
      <Col className="text-end">Código:</Col>
      <Col>{mat.code}</Col>
    </Row>
    <Row>
      <Col className="text-end">Créditos:</Col>
      <Col>{mat.cr}</Col>
    </Row>
    <Row>
      <Col className="text-end">{periodName}</Col>
      <Col>{matData.periodMap.get(mat.code)}</Col>
    </Row>
  </Container>;

  const isMatHiddenOnPensum = !rowNodeMap.current.get(mat.code)?.current;
  const locateBtn = <Container>
    <Row>
      <Button 
      disabled={isMatHiddenOnPensum}
      onClick={() => {
        navigate('/');
        scrollToRow(mat.code);
      }}>
        Localizar en pensum
      </Button>
    </Row>
    {/* TODO: Add locate on tree btn? */}
  </Container>

  /** Requirement callback factory.
   * Creates a onClick handler for the mat reqs.
   */
  const reqCbFactory = (mat: Pensum.Requirement) =>
    (typeof mat === 'string') ? () => navigate('/mat/' + mat) : undefined;

  const prereqInfo = (mat.prereq.length > 0) && <Container>
    <Row>Pre-requisitos:</Row>
    <Row>
      {mat.prereq.map((req, idx) =>
        <LongMatCode
          key={idx}
          data={req}
          onClick={reqCbFactory(req)} />)}
    </Row>
  </Container>;

  const coreqInfo = (mat.coreq.length > 0) && <Container>
    <Row>Co-requisitos:</Row>
    <Row>
      {mat.coreq.map((req, idx) =>
        <LongMatCode
          key={idx}
          data={req}
          type="coreq"
          onClick={reqCbFactory(req)} />)}
    </Row>
  </Container>;

  const postreqs = matData.postreqMap.get(mat.code) || [];
  const postreqInfo = (postreqs.length > 0) && <Container>
    <Row>Es requisito de:</Row>
    <Row>
      {postreqs.map((req, idx) =>
        <LongMatCode
          key={idx}
          data={req}
          onClick={reqCbFactory(req)} />)}
    </Row>
  </Container>;


  return (<>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>

    <Modal.Body className="d-flex flex-column gap-3">
      {generalInfo}
      {locateBtn}

      {prereqInfo}
      {coreqInfo}
      {postreqInfo}
    </Modal.Body>
  </>)
}

function Invalid({ code }: { code: string }) {
  return <>
    <Modal.Header closeButton>
      <Modal.Title>{`Materia no encontrada: ${code}`}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Intente usando mayusculas o guiones de por medio.
    </Modal.Body>
  </>
}