import { defineComponent, onMounted} from 'vue'
import {
  View as IconView
} from '@element-plus/icons-vue';
import './Custom.css';
export default defineComponent({ 
    data() {
        return {
            count: 0,
            buttonList: [1, 2, 3],
            max: 1000,
            value: 0,
        }
    },
    methods: {
        onClick() {
          this.count += 1;
        },
        scroll({scrollLeft, scrollTop}) {
            this.value = scrollTop;
            console.log( this.value )
        },
        inputSlider() {

        }
    },
    onMounted() {
        console.log('1111111')
    },
    render() { 
        return <div>
            {this.count}
            {
                this.buttonList.map(item => {
                    return <el-button onClick={this.onClick}>add count</el-button>
                })
            }
            <el-link type='primary'>
              <el-icon class="el-icon--right"><IconView /></el-icon>
            </el-link>
            <el-scrollbar max-height='400px' onScroll={this.scroll}>
                {
                    [1, 2, 3, 4, 5, 6, 1, 1,1 ,1, 1, 1, 2, 3, 4, 5, 6, 1, 1,1 ,1, 1].map(item => {
                        return <p class="scrollbar-demo-item">{item}</p>
                    })
                }
            </el-scrollbar>
            <el-slider
                // vModal={this.value}
                max={this.max}
                onInput={this.inputSlider}
            />
        </div> 
    }
})