import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";
import { CATEGORIES } from "@/data/mockData";

export const ExpensesCircle = () => {
  const totalExpenses = CATEGORIES.reduce(
    (sum, category) => sum + category.amount,
    0
  );

  const renderExpenseSegment = (startPercent: number, endPercent: number) => {
    const startAngle = (startPercent * 360 * Math.PI) / 18000 - Math.PI / 2;
    const endAngle = (endPercent * 360 * Math.PI) / 18000 - Math.PI / 2;

    const adjustedStartAngle = startAngle + Math.PI / 180;
    const adjustedEndAngle = endAngle - Math.PI / 180;

    const x1 = 125 + 80 * Math.cos(adjustedStartAngle);
    const y1 = 125 + 80 * Math.sin(adjustedStartAngle);
    const x2 = 125 + 115 * Math.cos(adjustedStartAngle);
    const y2 = 125 + 115 * Math.sin(adjustedStartAngle);
    const x3 = 125 + 115 * Math.cos(adjustedEndAngle);
    const y3 = 125 + 115 * Math.sin(adjustedEndAngle);
    const x4 = 125 + 80 * Math.cos(adjustedEndAngle);
    const y4 = 125 + 80 * Math.sin(adjustedEndAngle);

    const largeArcFlag = endPercent - startPercent <= 50 ? "0" : "1";

    return (
      <Path
        key={startPercent}
        d={`M ${x1} ${y1} L ${x2} ${y2} A 115 115 0 ${largeArcFlag} 1 ${x3} ${y3} L ${x4} ${y4} A 80 80 0 ${largeArcFlag} 0 ${x1} ${y1}`}
        fill="rgba(255, 255, 255, 0.08)"
        stroke="none"
      />
    );
  };

  const renderCircleSegment = (
    radius: number,
    startPercent: number,
    endPercent: number
  ) => {
    const startAngle = (startPercent * 360 * Math.PI) / 18000 - Math.PI / 2;
    const endAngle = (endPercent * 360 * Math.PI) / 18000 - Math.PI / 2;

    const adjustedStartAngle = startAngle + Math.PI / 180;
    const adjustedEndAngle = endAngle - Math.PI / 180;

    const x1 = 125 + radius * Math.cos(adjustedStartAngle);
    const y1 = 125 + radius * Math.sin(adjustedStartAngle);
    const x2 = 125 + radius * Math.cos(adjustedEndAngle);
    const y2 = 125 + radius * Math.sin(adjustedEndAngle);

    const largeArcFlag = endPercent - startPercent <= 50 ? "0" : "1";

    return (
      <Path
        key={`${radius}-${startPercent}`}
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`}
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1"
        fill="none"
      />
    );
  };

  const getIconPosition = (startPercent: number, endPercent: number) => {
    const middlePercent = (startPercent + endPercent) / 2;
    const angle = (middlePercent * 360 * Math.PI) / 18000 - Math.PI / 2;
    return {
      left: 125 + 97 * Math.cos(angle) - 9,
      top: 125 + 97 * Math.sin(angle) - 9,
    };
  };

  return (
    <View style={styles.container}>
      <Svg height="250" width="250" viewBox="0 0 250 250">
        {CATEGORIES.reduce((acc: JSX.Element[], category, index) => {
          const startPercent = CATEGORIES.slice(0, index).reduce(
            (sum, c) => sum + c.percent,
            0
          );
          const endPercent = startPercent + category.percent;
          return [...acc, renderExpenseSegment(startPercent, endPercent)];
        }, [])}

        {CATEGORIES.reduce((acc: JSX.Element[], category, index) => {
          const startPercent = CATEGORIES.slice(0, index).reduce(
            (sum, c) => sum + c.percent,
            0
          );
          const endPercent = startPercent + category.percent;
          return [...acc, renderCircleSegment(80, startPercent, endPercent)];
        }, [])}

        {CATEGORIES.reduce((acc: JSX.Element[], category, index) => {
          const startPercent = CATEGORIES.slice(0, index).reduce(
            (sum, c) => sum + c.percent,
            0
          );
          const endPercent = startPercent + category.percent;
          return [...acc, renderCircleSegment(115, startPercent, endPercent)];
        }, [])}
      </Svg>

      {CATEGORIES.reduce((acc: JSX.Element[], category, index) => {
        const startPercent = CATEGORIES.slice(0, index).reduce(
          (sum, c) => sum + c.percent,
          0
        );
        const endPercent = startPercent + category.percent;
        const position = getIconPosition(startPercent, endPercent);

        return [
          ...acc,
          <FontAwesome5
            key={index}
            name={category.icon}
            size={20}
            color="rgba(255, 255, 255, 0.8)"
            style={{
              position: "absolute",
              ...position,
            }}
          />,
        ];
      }, [])}

      <View style={[styles.centerText, { width: 160 }]}>
        <Text
          style={[
            styles.label,
            { fontSize: 15, opacity: 0.6, marginBottom: 5 },
          ]}
        >
          Total Expenses
        </Text>
        <Text style={[styles.amount, { fontSize: 30, fontWeight: "500" }]}>
          ${totalExpenses.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
    position: "relative",
    marginVertical: 30,
    alignSelf: "center",
  },
  centerText: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.6,
  },
  amount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
  },
});
