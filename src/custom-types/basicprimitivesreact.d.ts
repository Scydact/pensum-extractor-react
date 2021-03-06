/** Declaration file generated by dts-gen */
declare module 'basicprimitivesreact' {

  export class RotatedText {
    constructor(...args: any[]);

    getTransform(orientation: any): any;

    render(): any;

    static defaultProps: {
      horizontalAlignment: string;
      orientation: string;
      verticalAlignment: string;
    };

  }

  export function BackgroundAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function ConnectorAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function FamConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function FamDiagram(props: any): any;

  export function FamItemConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function HighlightPathAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function LabelAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function LevelAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function OrgConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function OrgDiagram(props: any): any;

  export function OrgItemConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function PaletteItemConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function ShapeAnnotationConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function TemplateConfigShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export namespace BackgroundAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace ConnectorAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace FamConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace FamDiagram {
    const defaultProps: {
      centerOnCursor: boolean;
      onCursorChanged: any;
      onCursorChanging: any;
      onHighlightChanged: any;
      onHighlightChanging: any;
      onSelectionChanged: any;
      onSelectionChanging: any;
    };

    function getDerivedStateFromProps(nextProps: any, state: any): any;

    namespace propTypes {
      function config(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

    }

  }

  export namespace FamItemConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace HighlightPathAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace LabelAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace LevelAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace OrgConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace OrgDiagram {
    const defaultProps: {
      centerOnCursor: boolean;
      onCursorChanged: any;
      onCursorChanging: any;
      onHighlightChanged: any;
      onHighlightChanging: any;
      onSelectionChanged: any;
      onSelectionChanging: any;
    };

    function getDerivedStateFromProps(nextProps: any, state: any): any;

    namespace propTypes {
      function config(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

    }

  }

  export namespace OrgItemConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace PaletteItemConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace RotatedText {
    namespace propTypes {
      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function horizontalAlignment(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function orientation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function verticalAlignment(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace horizontalAlignment {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace orientation {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace verticalAlignment {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace ShapeAnnotationConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }

  export namespace TemplateConfigShape {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  }


}