import React from "react";
import { useAuth } from "../Context/AuthContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>User Account Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-stone-300">
              Logged in as:{" "}
              <strong className="text-amber-400">{user?.email}</strong>
            </p>
            <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 text-xs text-stone-400">
              Welcome to your Zinnia Interiors client portal. You can view your
              consultation appointments and saved architectural inspirations
              here.
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
