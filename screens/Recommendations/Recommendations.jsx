// EnergyRecommendations.jsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSingleYearPicker } from "../../components";

// Import custom hook and styles
import { useRecommendations } from './hook';
import styles from './styles';

// Future Projections Card Component
const FutureProjectionsCard = ({ solarRecommendations }) => {
  if (!solarRecommendations) return null;
  
  const { future_projections } = solarRecommendations;
  
  return (
    <View style={styles.projectionsCard}>
      <View>
        <Text style={styles.projectionYearText}>{future_projections.year}</Text>
        <Text style={styles.projectionTitle}>Solar Investment Projections</Text>
        
        <View style={styles.projectionDetails}>
          <Text style={styles.projectionDetailText}>
            Predicted MERALCO Rate:{' '}
            <Text style={styles.projectionDetailValue}>
              {future_projections['Predicted MERALCO Rate']}
            </Text>
          </Text>
          
          <Text style={styles.projectionDetailText}>
            Installable Solar Capacity:{' '}
            <Text style={styles.projectionDetailValue}>
              {future_projections['Installable Solar Capacity']}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const EnergyRecommendations = () => {
  // Use the recommendations hook for data and functionality
  const {
    cityData,
    solarRecommendations,
    budget,
    setBudget,
    selectedYear,
    setSelectedYear,
    handleDownloadPDF,
    isLoading,
    setIsLoading,
    forceRefresh,
    fetchSolarRecommendations
  } = useRecommendations();

  // Use the SingleYearPicker hook for year selection
  const {
    year: yearPickerValue,
    error: yearError,
    showPicker,
    handleYearChange: handleYearPickerChange,
    handleReset,
    togglePicker
  } = useSingleYearPicker({
    initialYear: selectedYear,
    onYearChange: (selectedYearValue) => {
      setSelectedYear(selectedYearValue);
    }
  });

  // Handle budget change with minimum value of 15,000
  const handleBudgetChange = (value) => {
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue >= 15000 || value === '') {
        const validBudget = value === '' ? 15000 : numericValue;
        setBudget(validBudget);
        
        // Force data refresh with the new budget value
        setTimeout(() => {
          fetchSolarRecommendations();
        }, 300);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Energy Recommendations</Text>
          <Ionicons name="sunny" size={18} color="#E0F2F1" style={{marginLeft: 4}} />
        </View>
        
        <TouchableOpacity
          style={styles.pdfButton}
          onPress={handleDownloadPDF}
          disabled={isLoading}
        >
          <Ionicons name="document-text-outline" size={18} color="#FFF" />
          <Text style={styles.pdfButtonText}>Download PDF</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Input Controls */}
        <View style={styles.controlsCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Budget</Text>
            <View style={styles.budgetInputContainer}>
              <Text style={styles.currencyPrefix}>₱</Text>
              <TextInput
                style={styles.budgetInput}
                value={budget ? budget.toString() : ''}
                onChangeText={handleBudgetChange}
                keyboardType="numeric"
                placeholder="Enter Budget"
                onSubmitEditing={() => {
                  // Force refresh when user submits
                  fetchSolarRecommendations();
                }}
              />
            </View>
            <Text style={styles.helperText}>Minimum: ₱15,000</Text>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Year</Text>
            <TouchableOpacity 
              style={styles.yearPickerButton}
              onPress={togglePicker}
            >
              <Text style={styles.yearPickerButtonText}>{yearPickerValue.year()}</Text>
              <Ionicons name="calendar-outline" size={20} color="#64748B" style={{marginLeft: 8}} />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={() => {
              forceRefresh();
            }}
          >
            <Ionicons name="refresh" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Energy Potential Section */}
        <Text style={styles.sectionTitle}>Renewable Energy Potential</Text>
        
        <View style={styles.potentialCard}>
          <View style={styles.solarHeader}></View>
          <View style={styles.potentialContent}>
            <View style={styles.potentialIconContainer}>
              <Ionicons name="sunny" size={24} color="#FF9800" />
            </View>
            <View style={styles.potentialInfo}>
              <Text style={styles.potentialTitle}>Solar</Text>
              <Text style={styles.potentialValue}>
                Potential: High
              </Text>
              <Text style={styles.potentialDetails}>
                Average 5.5 kWh/m²/day
              </Text>
            </View>
          </View>
        </View>

        {/* Future Projections Section */}
        <Text style={styles.sectionTitle}>Future Projections</Text>
        
        {solarRecommendations ? (
          <FutureProjectionsCard solarRecommendations={solarRecommendations} />
        ) : (
          <View style={styles.loadingCard}>
            <ActivityIndicator size="small" color="#2E7D32" />
            <Text style={styles.loadingText}>Loading projections...</Text>
          </View>
        )}

        {/* Cost-Benefit Analysis Section */}
        <Text style={styles.sectionTitle}>Cost-Benefit Analysis</Text>
        
        {solarRecommendations ? (
          <View style={styles.costBenefitGrid}>
            {solarRecommendations.cost_benefit_analysis.map((item, index) => (
              <View key={index} style={styles.costBenefitCard}>
                <Text style={styles.costBenefitLabel}>{item.label}</Text>
                <View style={styles.costBenefitValueContainer}>
                  <Ionicons name={getIconName(item.icon)} size={20} color="#209652" />
                  <Text style={styles.costBenefitValue}>{item.value}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.loadingCard}>
            <ActivityIndicator size="small" color="#2E7D32" />
            <Text style={styles.loadingText}>Loading analysis...</Text>
          </View>
        )}
      </ScrollView>
      
      {/* Loading Overlay */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingCard}>
            <ActivityIndicator size="large" color="#1E8449" />
            <Text style={styles.loadingText}>Loading data...</Text>
          </View>
        </View>
      )}
      
      {/* Year Picker Modal */}
      <Modal
        visible={showPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={togglePicker}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={togglePicker}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Year</Text>
              <TouchableOpacity onPress={togglePicker}>
                <Ionicons name="close" size={24} color="#4A5568" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={Array.from({length: 10}, (_, i) => new Date().getFullYear() + i)}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.yearItem,
                    item === yearPickerValue.year() && styles.selectedYearItem
                  ]}
                  onPress={() => {
                    handleYearPickerChange(item);
                    togglePicker();
                    // Trigger a refresh to ensure data updates
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 800);
                  }}
                >
                  <Text style={[
                    styles.yearItemText,
                    item === yearPickerValue.year() && styles.selectedYearText
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.yearList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

// Helper function to map web icon names to Ionicons names (if needed elsewhere)
export const getIconName = (webIconName) => {
  const iconMap = {
    'money': 'cash-outline',
    'savings': 'trending-up',
    'calendar': 'calendar-outline',
    'power': 'flash-outline',
    'info': 'information-circle-outline',
    'loading': 'refresh',
    'save': 'download-outline',
    'solar': 'sunny-outline',
    'location': 'location-outline'
  };
  
  return iconMap[webIconName] || 'help-circle-outline';
};

export default EnergyRecommendations;