import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  Table,
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
} from "../../../components/Component";
import { basicData } from "./TableData";

const BasicTable = () => {
  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Basic Table Example
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for opt-in styling of tables with Bootstrap. Just add the base className{" "}
                <code className="code-class">.table</code> to any <code className="code-tag">&lt;table&gt;</code> tag,
                then extend with custom styles or our various included modifier classNames.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Table Default</BlockTitle>
              <p>
                Using the most basic table markup, here’s how <code className="code-class">.table</code> based tables
                look by default.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Table Head Options</BlockTitle>
              <p>
                Similar to others table, use the modifier classNames <code className="code-class">.thead-light</code> or{" "}
                <code className="code-class">.thead-dark</code> to make <code className="code-tag">&lt;thead&gt;</code>{" "}
                appear light or dark.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table headColor="light"></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table">  
    <thead className="thead-light">    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <PreviewCard>
            <Table headColor="dark"></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table">  
    <thead className="thead-dark">    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Table Striped Rows</BlockTitle>
              <p>
                Use <code className="code-class">.table-stripped</code> className in{" "}
                <code className="code-tag">&lt;table&gt;</code> tag to make zebra stripping on table row.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table striped></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-striped">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Bordered Table</BlockTitle>
              <p>
                Use <code className="code-class">.table-bordered</code> className in{" "}
                <code className="code-tag">&lt;table&gt;</code> tag to make every cell bordered.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {basicData.header.map((item, idx) => {
                    return <th key={idx}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {basicData.data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <td>{item.first}</td>
                      <td>{item.last}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-bordered">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Borderless Table</BlockTitle>
              <p>
                Use <code className="code-class">.table-borderless</code> className in{" "}
                <code className="code-tag">&lt;table&gt;</code> tag to remove every cell border.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table border={false}></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-borderless">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Table Hoverable Row</BlockTitle>
              <p>
                Use <code className="code-class">.table-hover</code> className in{" "}
                <code className="code-tag">&lt;table&gt;</code> to enable a hover state on table rows.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table hover></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-hover">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Small Table</BlockTitle>
              <p>
                Add <code className="code-class">.table-sm</code> to get more small table.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table small></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-sm">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Responsive Table</BlockTitle>
              <p>
                Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across
                all viewports by wrapping a <code className="code-class">.table</code> with{" "}
                <code className="code-class">.table-responsive</code>. Or, pick a maximum breakpoint with which to have
                a responsive table up to by using{" "}
                <code className="code-class">.table-responsive{"-sm|-md|-lg|-xl"}</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table responsive></Table>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<table className="table table-responsive">  
    <thead>    
        <tr>      
            <th scope="col">#</th>      
            <th scope="col">First</th>      
            <th scope="col">Last</th>      
            <th scope="col">Handle</th>    
        </tr>  
    </thead>  
    <tbody>    
        <tr>      
            <th scope="row">1</th>      
            <td>Mark</td>      
            <td>Otto</td>      
            <td>@mdo</td>    
        </tr>    
        <tr>      
            <th scope="row">2</th>      
            <td>Jacob</td>      
            <td>Thornton</td>      
            <td>@fat</td>    
        </tr>    
        <tr>      
            <th scope="row">3</th>      
            <td>Larry</td>      
            <td>the Bird</td>      
            <td>@twitter</td>    
        </tr>  
    </tbody>
</table>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default BasicTable;
