// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa', // Light wind green
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#047857', // Deep wind teal
  },
  selectedRange: {
    fontSize: 16,
    color: '#0D9488', // Teal shade
    marginTop: 4,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: '#f6f8fa', // Soft wind green
    borderRadius: 10,
    padding: 15,
    shadowColor: '#064E3B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    backgroundColor: '#f6f8fa', // Pale wind green
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#064E3B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#065F46',
  },
  generationValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#047857',
    marginBottom: 4,
  },
  generationSubtitle: {
    fontSize: 14,
    color: '#0F766E',
    marginBottom: 20,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#0F766E',
    marginBottom: 15,
  },
  tableContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#99F6E4',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#5EEAD4',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#99F6E4',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#065F46',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCFBF1',
  },
  tableRowEven: {
    backgroundColor: '#F0FDFA',
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: '#047857',
  },
  downloadButton: {
    backgroundColor: '#0D9488',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  downloadButtonText: {
    color: '#ECFDF5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#0F766E',
  },

  // Connection status styles
  connectionIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  connectionDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  connectionText: {
    fontSize: 14,
    color: '#0F766E',
  },

  // Error screen styles
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F87171',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: '#0F766E',
    textAlign: 'center',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#6EE7B7',
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#047857',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ECFDF5',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Debug button (only shown in dev mode)
  debugButton: {
    backgroundColor: '#0F766E',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  debugButtonText: {
    color: '#ECFDF5',
    fontSize: 14,
    marginLeft: 6,
  },
});

export default styles;
