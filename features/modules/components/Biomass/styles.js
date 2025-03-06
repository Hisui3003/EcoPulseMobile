import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ea', // Light earthy background
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
    color: '#4E9F3D', // Biomass green
  },
  selectedRange: {
    fontSize: 16,
    color: '#2E6930', // Darker biomass green
    marginTop: 4,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4E9F3D', // Biomass green
  },
  generationValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E6930', // Darker biomass green
    marginBottom: 4,
  },
  generationSubtitle: {
    fontSize: 14,
    color: '#3A5F0B', // Earthy dark green
    marginBottom: 20,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#3A5F0B', // Earthy dark green
    marginBottom: 15,
  },
  tableContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d1c4a9', // Soft wood-like brown
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#A7C957', // Light biomass green
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d1c4a9',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2E6930', // Dark biomass green
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0d8c3',
  },
  tableRowEven: {
    backgroundColor: '#DDEAB2', // Very light biomass green
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: '#3A3A3A',
  },
  downloadButton: {
    backgroundColor: '#6A994E', // Biomass green accent
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  downloadButtonText: {
    color: '#fff',
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
    color: '#2E6930', // Darker biomass green
  },
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
    color: '#2E6930', // Darker biomass green
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F', // Red for error
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#1B5E20', // Green for retry
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  debugButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  debugButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
  },
});

export default styles;
