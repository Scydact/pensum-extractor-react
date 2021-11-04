/** Make some properties in T optional. */
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/** Contains all the structures that can be fetched from a json file. */
declare namespace PensumJson {

  /** Data format for universidades.json. */
  type Universities = {
    universities: University[],
  };

  /** Single university, inside Universities object. */
  type University = {
    code: string,
    shortName: string,
    longName: string,
    imgUrl: string | null,
  }

  /** Single carrera for autocomplete. */
  type Carrera = {
    /** Codigo de la carrera (eg. ADM10). */
    code: string,
    /** Nombre largo de la carrera. */
    name: string,
    /** Escuela a la que pertenece la carrera. */
    school: string,
  }

  /** Pensum Index file (path at $PUBLIC/pensum/$UNIVERSIRY/index.json) */
  type PensumIndex = {
    /** University name (ej UNAPEC). */
    university: string,
    /** API point to try to fetch unknown pensums from. */
    api: string | null,
    /** List of recorded pensums. */
    careers: Carrera[],
  }
}


/** Functional data */
namespace Pensum {

  type Requirement = string | { text: string }

  /** Materia dentro de una carrera. */
  type Mat = {
    /** Codigo de materia */
    code: string,
    /** Nombre de la materia */
    name: string,
    /** Creditos de esta materia */
    cr: number,
    /** Prerequisitos de esta materia (ej. MAT101) */
    prereq: Requirement[],
    /** Corequisitos de esta materia (ej. MAT102) */
    coreq: Requirement[],
  }

  /** Pensum singular de una carrera. */
  type Pensum = {
    /** Version del pensum. Debe ser 2. */
    version: number,
    /** Universidad/escuela a la que pertenece este pensum. */
    institution: string,
    /** Nombre largo de la carrera (ej. Lic. en Administracion de empresas) */
    career: string,
    /** Codigo de la carrera (ej. ADM10) */
    code: string,
    /** Fecha de publicacion del pensum. */
    publishDate: string,
    /** Fecha de descarga de este pensum. */
    fetchDate: string,
    /** Lineas de detalle extra en el pensum. */
    info: string[],
    /** Materias que no estan explicitamente en el pensum, pero que aun asi son requisitos. (ej. ENG100) */
    loose: Mat[]
    /** Cuatrimestres, cada uno con sus respectivas materias. */
    periods: Mat[][]
  }

  /** Data format that gets saved onto a file. */
  namespace Save {

    /** Materia en formato de guardado. Sin postrequisitos, y con prerequisitos/corequisitos opcionales. */
    type Mat = PartialBy<Pensum.Mat, 'prereq'|'coreq'>

    type Pensum = Omit<Pensum.Pensum, 'loose' | 'periods'> & {
      /** Materias que no estan explicitamente en el pensum, pero que aun asi son requisitos. (ej. ENG100) */
      loose: Mat[],
      /** Cuatrimestres, cada uno con sus respectivas materias. */
      periods: Mat[][],
    }


    /** Old format */
    namespace Legacy {
      /** Materia dentro de una carrera. */
      type Mat = {
        /** Codigo de materia */
        codigo: string,
        /** Nombre de la materia */
        asignatura: string,
        /** Creditos de esta materia */
        creditos: number,
        /** Prerequisitos de esta materia (ej. MAT101) */
        prereq?: string | string[],
        /** Prerequisitos textuales de esta materia (ej. 90% de creditos) */
        prereqExtra?: string | string[],
      }

      /** Pensum singular de una carrera. */
      type Pensum2 = {
        /** Nombre largo de la carrera (ej. Lic. en Administracion de empresas) */
        carrera: string,
        /** Codigo de la carrera (ej. ADM10) */
        codigo: string,
        /** Fecha de publicacion del pensum */
        vigencia: string,
        /** Lineas de detalle extra en el pensum. */
        infoCarrera: string[],
        /** Version del pensum. Debe ser 2. */
        version: 0 | 1 | 2,
        /** Cuatrimestres, cada uno con sus respectivas materias. */
        cuats: Mat[][]
      }
    }


  }
}