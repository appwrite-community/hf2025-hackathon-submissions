import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconChevronDown } from "@/assets/images/IconChevronDown";
import { IconChevronUp } from "@/assets/images/IconChevronUp";
import { Log } from "@/types/log";
import { Pill } from "@/components/Pill";
import { Code } from "@/components/Code";

interface LogsProps {
  toggleBottomSheet: () => void;
  isOpen: boolean;
  logs: Array<Log>;
}

export const Logs = ({ toggleBottomSheet, isOpen, logs }: LogsProps) => {
  const formatDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
    return formattedDate
      .replace(" at", ",")
      .replace("AM", "")
      .replace("PM", "");
  };
  const getEmptyState = () => {
    return (
      <>
        <View style={styles.logTitle}>
          <Text style={styles.logTitleText}>Logs</Text>
        </View>
        <View style={styles.logMeta}>
          <View style={styles.logMetaRow}>
            <View style={styles.logMetaCell}>
              <Text style={styles.value}>There are no logs to show</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  const getTable = () => {
    return (
      <ScrollView horizontal style={styles.horizontalScroll}>
        <View>
          <View style={{ ...styles.tableRow, ...styles.logTitle }}>
            <Text style={{ flexGrow: 1 }}>Date</Text>
            <Text style={styles.tableCell}>Status</Text>
            <Text style={styles.tableCell}>Method</Text>
            <Text style={styles.tableCell}>Path</Text>
            <Text style={styles.tableCellResponse}>Response</Text>
          </View>
          {logs.map((log, index) => {
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={{ flexGrow: 1 }}>{formatDate(log.date)}</Text>
                <View style={styles.tableCell}>
                  <View style={{ flexDirection: "row" }}>
                    <Pill
                      status={log.status === 200 ? "success" : "error"}
                      text={log.status.toString()}
                    />
                  </View>
                </View>
                <Text style={styles.tableCell}>{log.method}</Text>
                <Text style={styles.tableCell}>{log.path}</Text>
                <View style={styles.tableCellResponse}>
                  <Code variant={"primary"}>
                    {JSON.stringify(log.response)}
                  </Code>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleBottomSheet}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Logs</Text>
          <Code variant={"primary"}>{logs.length.toString()}</Code>
        </View>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.logContainer}>
          <View>
            <View style={styles.logTitle}>
              <Text style={styles.logTitleText}>Project</Text>
            </View>
            <View style={styles.logMeta}>
              <View style={styles.logMetaRow}>
                <View style={styles.logMetaCell}>
                  <Text style={styles.label}>Endpoint</Text>
                  <Text style={styles.value}>
                    {process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT}
                  </Text>
                </View>
                <View style={styles.logMetaCell}>
                  <Text style={styles.label}>Project ID</Text>
                  <Text style={styles.value}>
                    {process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}
                  </Text>
                </View>
              </View>
              <View style={styles.logMetaRow}>
                <View style={styles.logMetaCell}>
                  <Text style={styles.label}>Project name</Text>
                  <Text style={styles.value}>
                    {process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.logs}>
            {logs.length > 0 ? getTable() : getEmptyState()}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logContainer: {
    display: "flex",
    flexDirection: Dimensions.get("window").width < 1024 ? "column" : "row",
  },
  logs: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  headerTitleText: {
    fontWeight: "bold",
  },
  logTitle: {
    paddingInline: 16,
    paddingBlock: 8,
    backgroundColor: "#FAFAFB",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EDEDF0",
  },
  logTitleText: {
    color: "#97979B",
    fontSize: 14,
  },
  logMeta: {
    display: "flex",
    padding: 16,
    gap: 16,
  },
  logMetaRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  logMetaCell: {
    display: "flex",
    minWidth: 200,
    gap: 8,
  },
  label: {
    color: "#97979B",
    fontSize: 12,
  },
  value: {
    color: "#56565C",
    fontSize: 12,
  },
  table: {
    display: "flex",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingInline: 16,
    paddingBlock: 8,
  },
  tableCell: {
    width: 80,
  },
  tableCellResponse: {
    width: 200,
  },
  horizontalScroll: {
    flexGrow: 0,
  },
});
