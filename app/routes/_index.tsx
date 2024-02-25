import { MetaFunction } from "@remix-run/node";
import { Table } from "react-daisyui";

import { InfoCard, TeamCard } from "~/components/molecules";
import { infoCardData } from "~/data/infoCardData";

export const meta: MetaFunction = () => {
  return [
    { title: "DynaCraft" },
    { name: "description", content: "Welcome to DynaCraft!" },
  ];
};

export default function Index() {
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-flow-row grid-cols-3 gap-x-3">
        {infoCardData.map((data, index) => (
          <InfoCard
            key={index}
            field={data.field}
            fieldIcon={data.fieldIcon}
            data={data.data}
            subData={data.subData}
          />
        ))}
      </div>
      <div>
        <h1 className="text-[28px] font-bold">Projects</h1>
        <div className="flex w-full">
          <div className="basis-[75%]">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <span />
                  <span>Name</span>
                  <span>Job</span>
                  <span>Speciality</span>
                </Table.Head>

                <Table.Body>
                  <Table.Row>
                    <span>1</span>
                    <span>Rhodes Island</span>
                    <span>Medical drug</span>
                    <span>Fighting</span>
                  </Table.Row>

                  <Table.Row>
                    <span>2</span>
                    <span>Victoria</span>
                    <span>Football</span>
                    <span>War</span>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="basis-[25%] space-y-4">
            <TeamCard
              title="Project A"
              progress={82}
              startDate="12/12/2023"
              endDate="14/12/2024"
            />
            <TeamCard
              title="Project B"
              progress={75}
              startDate="12/12/2023"
              endDate="14/12/2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
