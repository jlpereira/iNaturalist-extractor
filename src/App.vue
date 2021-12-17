<template>
  <div class="app">
    <div>
      <h2>iNaturalist</h2>
      <InputId @object-id="getObservation"/>
      <h4>Search observations by</h4>
      <OptionList
        v-model="requestParam"
        :list="INATURALIST_TYPES"
      />
      <h4>Import</h4>
      <OptionList
        v-model="importType"
        :list="IMPORT_TYPES"
      />
    </div>
    <div>
      <PaginationComponent
        :total="pagination.total"
        :page="pagination.page"
        :per="pagination.per_page"
      />
      <GalleryMain
        :images="objectImages"
        @selected="processImages"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Observation, Depiction, CollectionObject } from './services'
import { 
  INATURALIST_TYPES, 
  IMPORT_TYPES
} from './constants'
import OptionList from './components/OptionList.vue'
import GalleryMain from './components/Gallery/GalleryMain.vue'
import InputId from './components/InputId.vue'
import getPagination from './utils/pagination.js'
import PaginationComponent from './components/Pagination.vue'
import axios from 'axios'


const importType = ref(null)
const requestParam = ref(INATURALIST_TYPES.Observation)
const observationData = ref(null)
const objectImages = computed(() => [].concat(...observationData.value?.map(item => item.photos) || []))
const params = ref({
  page: 1,

})
const pagination = ref({
  per_page: 30,
  page: 1,
  total: 0
})

const getObservation = id => {
  Observation.where({ [requestParam.value]: id, ...params.value }).then(({ data, headers }) => {
    Object.assign(pagination.value, getPagination(headers))
    observationData.value = data
  })
}

const processImages = images => {
  images.forEach(({ large_url }) => {
    createDepiction(large_url)
  })
}

const createDepiction = async imageUrl => {
  const imageData = (await axios.get(imageUrl)).data
  const collectionObject = (await CollectionObject.create({ collection_object: { total: 1, project_id: 16 } })).data

  const depiction = {
    depiction_object_id: collectionObject.id,
    depiction_object_type: 'CollectionObject',
    image_attributes: imageData,
    project_id: 16
  }
  Depiction.create({ depiction })
}
</script>

<style>

.app {
  margin: 0 auto;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
