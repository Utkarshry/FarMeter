package com.farmeter.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Analytics
import androidx.compose.material.icons.rounded.Home
import androidx.compose.material.icons.rounded.Storefront
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.farmeter.ui.theme.FarMeterTheme

private data class SensorData(val label: String, val value: String)

private enum class FarMeterTab(val title: String) {
    Dashboard("Dashboard"),
    Marketplace("Marketplace"),
    ESGLedger("ESG Ledger")
}

@Composable
fun FarMeterRoot() {
    FarMeterTheme {
        Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
            var selectedTab by rememberSaveable { mutableStateOf(FarMeterTab.Dashboard) }

            Scaffold(
                containerColor = MaterialTheme.colorScheme.background,
                bottomBar = {
                    NavigationBar(
                        tonalElevation = 0.dp,
                        containerColor = MaterialTheme.colorScheme.surface,
                    ) {
                        NavigationBarItem(
                            selected = selectedTab == FarMeterTab.Dashboard,
                            onClick = { selectedTab = FarMeterTab.Dashboard },
                            icon = { Icon(Icons.Rounded.Home, contentDescription = FarMeterTab.Dashboard.title) },
                            label = { Text(FarMeterTab.Dashboard.title) }
                        )
                        NavigationBarItem(
                            selected = selectedTab == FarMeterTab.Marketplace,
                            onClick = { selectedTab = FarMeterTab.Marketplace },
                            icon = { Icon(Icons.Rounded.Storefront, contentDescription = FarMeterTab.Marketplace.title) },
                            label = { Text(FarMeterTab.Marketplace.title) }
                        )
                        NavigationBarItem(
                            selected = selectedTab == FarMeterTab.ESGLedger,
                            onClick = { selectedTab = FarMeterTab.ESGLedger },
                            icon = { Icon(Icons.Rounded.Analytics, contentDescription = FarMeterTab.ESGLedger.title) },
                            label = { Text(FarMeterTab.ESGLedger.title) }
                        )
                    }
                }
            ) { innerPadding ->
                when (selectedTab) {
                    FarMeterTab.Dashboard -> DashboardScreen(innerPadding)
                    FarMeterTab.Marketplace -> MarketplaceScreen(innerPadding)
                    FarMeterTab.ESGLedger -> ESGScreen(innerPadding)
                }
            }
        }
    }
}

@Composable
private fun DashboardScreen(innerPadding: PaddingValues) {
    val data = listOf(
        SensorData("Nitrogen (N)", "42 ppm"),
        SensorData("Phosphorus (P)", "19 ppm"),
        SensorData("Potassium (K)", "36 ppm"),
        SensorData("Soil Moisture", "28%")
    )

    Column(
        modifier = Modifier
            .padding(innerPadding)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text("Field Dashboard", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.SemiBold)
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
            modifier = Modifier.weight(1f, fill = false)
        ) {
            items(data) { item ->
                Card(
                    shape = MaterialTheme.shapes.extraLarge,
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        Text(item.label, style = MaterialTheme.typography.bodyMedium)
                        Text(item.value, style = MaterialTheme.typography.titleLarge, color = MaterialTheme.colorScheme.primary)
                    }
                }
            }
        }

        Card(
            shape = MaterialTheme.shapes.extraLarge,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Text("AI Alert", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
                Text(
                    "Deploy 5kg Bio-Frass",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.primary
                )
            }
        }
    }
}

@Composable
private fun MarketplaceScreen(innerPadding: PaddingValues) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        Text("Marketplace", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.SemiBold)

        Button(
            onClick = {},
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.extraLarge
        ) {
            Text("Trade Raw Stubble")
        }

        Button(
            onClick = {},
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.extraLarge
        ) {
            Text("Buy Organic Fertilizer")
        }
    }
}

@Composable
private fun ESGScreen(innerPadding: PaddingValues) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("ESG Ledger", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.SemiBold)
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.extraLarge,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(20.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("Carbon Sequestered", style = MaterialTheme.typography.titleMedium)
                Text("2.48 tCO₂e", style = MaterialTheme.typography.headlineSmall, color = MaterialTheme.colorScheme.primary)
            }
        }
    }
}
