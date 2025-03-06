// SimpleChart.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleChart = ({ data, width = 300, height = 200 }) => {
  if (!data || data.length === 0) return null;
  
  // Find the max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <View style={[styles.container, { width, height }]}>
      {/* Y-axis labels */}
      <View style={styles.yAxis}>
        <Text style={styles.axisLabel}>{Math.round(maxValue)}</Text>
        <Text style={styles.axisLabel}>{Math.round(maxValue / 2)}</Text>
        <Text style={styles.axisLabel}>0</Text>
      </View>
      
      {/* Chart area */}
      <View style={styles.chartArea}>
        {/* Horizontal grid lines */}
        <View style={[styles.gridLine, { top: 0 }]} />
        <View style={[styles.gridLine, { top: '50%' }]} />
        <View style={[styles.gridLine, { bottom: 0 }]} />
        
        {/* Data bars */}
        <View style={styles.barsContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.barWrapper}>
              <View 
                style={[
                  styles.bar, 
                  { 
                    height: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: '#FFB800' 
                  }
                ]} 
              />
              <Text style={styles.xLabel}>{item.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  yAxis: {
    width: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  axisLabel: {
    fontSize: 10,
    color: '#8898AA',
  },
  chartArea: {
    flex: 1,
    position: 'relative',
    height: '100%',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '100%',
    paddingBottom: 20, // Space for x-axis labels
  },
  barWrapper: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  xLabel: {
    fontSize: 10,
    color: '#8898AA',
    marginTop: 5,
    position: 'absolute',
    bottom: -20,
  },
});

export default SimpleChart;