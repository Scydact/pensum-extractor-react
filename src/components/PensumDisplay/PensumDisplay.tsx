import Card from 'react-bootstrap/Card';
import PensumLoose from './PensumLoose';
import PensumTable from "./PensumTable";

type Props = {
  pensum: Pensum.Pensum
}

function PensumDisplay({ pensum }: Props) {
  const { career, periods, loose, periodType } = pensum;

  return <>
    <Card>
      <Card.Body className="pensum-table-container">
        <Card.Title>{career}</Card.Title>
        <PensumTable periods={periods} periodType={periodType} />
      </Card.Body>
    </Card>

    {loose &&
      <Card>
        <Card.Body className="pensum-table-container">
          <Card.Title>Demás materias</Card.Title>
          <PensumLoose loose={loose} />
        </Card.Body>
      </Card>
    }

  </>
}

export default PensumDisplay;