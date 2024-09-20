import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export interface FinancialRecord {
  _id?: unknown;
  id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialRecordContextType {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  updateRecord: (id: string, newRecord: FinancialRecord) => void;
  deleteRecord: (id: string) => void;
}

export const FinancialRecordContext = createContext<
  FinancialRecordContextType | undefined
>(undefined);

export const FinancialRecordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const { user } = useUser();

  useEffect(() => {
    const fetchRecords = async () => {
      if (!user?.id) return;
      const res = await fetch(
        `http://localhost:3001/financial-records/getAllByUserID/${user.id}`
      );
      if (res.ok) {
        const data = await res.json();
        setRecords(data);
      }
    };
    fetchRecords();
  }, [user?.id]);

  const addRecord = async (record: FinancialRecord) => {
    const res = await fetch("http://localhost:3001/financial-records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
    try {
      if (res.ok) {
        const newRecord = await res.json();
        setRecords([...records, newRecord]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async (id: string, newRecord: FinancialRecord) => {
    const res = await fetch(`http://localhost:3001/financial-records/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord),
    });
    try {
      if (res.ok) {
        const updatedRecord = await res.json();
        setRecords(
          records.map((record) =>
            record._id === updatedRecord._id ? updatedRecord : record
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id: string) => {
    const res = await fetch(`http://localhost:3001/financial-records/${id}`, {
      method: "DELETE",
    });
    try {
      if (res.ok) {
        setRecords(records.filter((record) => record._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordContextType | undefined>(
    FinancialRecordContext
  );
  if (!context) {
    throw new Error(
      "useFinancialRecords must be used within a FinancialRecordProvider"
    );
  }
  return context;
};
